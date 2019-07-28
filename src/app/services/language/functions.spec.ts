import { environment } from '@env/environment';
import { AppLanguage } from '@models/language';
import { getAppGenericaLanguage, isLanguageUsedByThisApp } from './functions';

describe('LanguageFunctions', () => {
  const invalidLanguage = 'xyzabc';
  const extraLanguages = ['pt' as AppLanguage];
  const defaultLanguage = 'en' as AppLanguage;
  let defaultLanguageBkp: AppLanguage;
  let extraLanguagesBkp: AppLanguage[];

  beforeAll(() => {
    // backup
    defaultLanguageBkp = environment.defaultLanguage;
    extraLanguagesBkp = [...environment.extraLanguages];
    // modify
    environment.extraLanguages = extraLanguages;
    environment.defaultLanguage = defaultLanguage;
  });

  afterAll(() => {
    // restore
    environment.extraLanguages = extraLanguagesBkp;
    environment.defaultLanguage = defaultLanguageBkp;
  });

  it(`should get ${AppLanguage.PT} if language is pt-BR`, () => {
    // given
    const languagePtBr = 'pt-BR';
    // when
    const language = getAppGenericaLanguage(languagePtBr);
    // then
    expect(language).toEqual(AppLanguage.PT);
  });

  it('should get undefined if language has length 1', () => {
    const language = getAppGenericaLanguage('!');
    expect(language).toBeUndefined();
  });

  it('should get undefined if language is undefined', () => {
    const language = getAppGenericaLanguage(undefined);
    expect(language).toBeUndefined();
  });

  it('isLanguageUsedByThisApp: should get undefined if language is not defined on environment.extraLanguages', () => {
    // given
    const test = invalidLanguage;
    // when
    const language = isLanguageUsedByThisApp(test);
    // then
    expect(language).toBeFalsy();
  });

});
