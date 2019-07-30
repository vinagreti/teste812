import { environment } from '@env/environment';
import { I18nLocale } from '@models/language';

export function getAppGenericLanguageFromLocale(lang: string): I18nLocale {
  if (lang) {
    if (lang.length > 1) {
      return lang.substr(0, 2) as I18nLocale;
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}

export function isLanguageUsedByThisApp(lang: I18nLocale) {
  return [environment.defaultLanguage, ...environment.extraLanguages].includes(lang as I18nLocale);
}

export function getAppGenericaLanguage(lang: string): I18nLocale {
  const genericLanguage = getAppGenericLanguageFromLocale(lang);
  const languageIsValid = isLanguageUsedByThisApp(genericLanguage);
  if (languageIsValid) {
    return genericLanguage;
  } else {
    return undefined;
  }
}
