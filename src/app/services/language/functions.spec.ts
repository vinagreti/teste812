import { I18nLocale } from '@models/language';
import { getAppGenericaLanguage, isLanguageUsedByThisApp } from './functions';

describe('LanguageFunctions', () => {
  const invalidLanguage = '!';

  it(`should get generic ${I18nLocale.PT} if language is ${I18nLocale.PT}-xxx`, () => {
    // given
    const languagePtBr = `${I18nLocale.PT}-xxx`;
    // when
    const language = getAppGenericaLanguage(languagePtBr);
    // then
    expect(language).toEqual(I18nLocale.PT);
  });

  it('should get undefined if language has length 1', () => {
    const language = getAppGenericaLanguage(invalidLanguage);
    expect(language).toBeUndefined();
  });

  it('should get undefined if language is undefined', () => {
    const language = getAppGenericaLanguage(undefined);
    expect(language).toBeUndefined();
  });

  it('should get undefined if language is not defined on environment.extraLanguages', () => {
    // given
    const test = invalidLanguage as I18nLocale;
    // when
    const language = isLanguageUsedByThisApp(test);
    // then
    expect(language).toBeFalsy();
  });

});
