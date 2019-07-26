import { AppLanguage } from '@models/language';

export function getGenericLanguage(lang: AppLanguage): AppLanguage {
  if (lang) {
    if (lang.length > 1) {
      return lang.substr(0, 2) as AppLanguage;
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}

export function isValidLanguage(lang: AppLanguage) {
  return Object.values(AppLanguage).includes(lang);
}

export function getValidLanguage(lang: AppLanguage): AppLanguage {
  const genericLanguage = getGenericLanguage(lang);
  const languageIsValid = isValidLanguage(genericLanguage);
  if (languageIsValid) {
    return genericLanguage;
  } else {
    return undefined;
  }
}

export function getStartupLanguage(): AppLanguage {
  const browserLanguage = navigator.language || (navigator as any).userLanguage;
  const validBrowserLanguage = getValidLanguage(browserLanguage);
  return validBrowserLanguage || AppLanguage.PT;
}
