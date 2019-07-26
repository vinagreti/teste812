import { AppLanguage } from '@models/language';
import { mockReadOnlyProperties } from '@testing/functions';
import { getGenericLanguage, getStartupLanguage } from './functions';

describe('LanguageFunctions', () => {
  const invalidLanguage = 'x';

  it('should reuturn the current language', () => {
    const language = getStartupLanguage();
    expect(language).toBeTruthy();
  });

  it('should get the navigator language', () => {
    mockReadOnlyProperties(navigator, 'language', 'pt-BR');
    const language = getStartupLanguage();
    expect(language).toEqual(AppLanguage.PT);
  });

  it('should get the navigator language', () => {
    mockReadOnlyProperties(navigator as any, 'userLanguage', 'pt-BR');
    mockReadOnlyProperties(navigator, 'language', undefined);
    const language = getStartupLanguage();
    expect(language).toEqual(AppLanguage.PT);
  });

  it('should get the default language', () => {
    mockReadOnlyProperties(navigator, 'language', invalidLanguage);
    const language = getStartupLanguage();
    expect(language).toBeTruthy();
  });

  it('should get undefined if language is x', () => {
    const language = getGenericLanguage(invalidLanguage as AppLanguage);
    expect(language).toBeUndefined();
  });

  it('should get undefined if language is undefined', () => {
    const language = getGenericLanguage(undefined);
    expect(language).toBeUndefined();
  });

});
