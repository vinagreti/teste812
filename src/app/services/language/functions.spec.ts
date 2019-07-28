import { AppLanguage } from '@models/language';
import { getAppGenericaLanguage } from './functions';

describe('LanguageFunctions', () => {
  const invalidLanguage = 'x';

  it(`should get ${AppLanguage.PT} if language is pt-BR`, () => {
    const language = getAppGenericaLanguage('pt-BR');
    expect(language).toEqual(AppLanguage.PT);
  });

  it('should get undefined if language is x', () => {
    const language = getAppGenericaLanguage(invalidLanguage);
    expect(language).toBeUndefined();
  });

  it('should get undefined if language is undefined', () => {
    const language = getAppGenericaLanguage(undefined);
    expect(language).toBeUndefined();
  });

});
