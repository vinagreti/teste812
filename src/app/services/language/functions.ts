import { environment } from '@env/environment';
import { AppLanguage } from '@models/language';

function getAppGenericLanguageFromLocale(lang: string): AppLanguage {
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

export function isLanguageUsedByThisApp(lang: string) {
  return [environment.defaultLanguage, ...environment.extraLanguages].includes(lang as AppLanguage);
}

export function getAppGenericaLanguage(lang: string): AppLanguage {
  const genericLanguage = getAppGenericLanguageFromLocale(lang);
  const languageIsValid = isLanguageUsedByThisApp(genericLanguage);
  if (languageIsValid) {
    return genericLanguage;
  } else {
    return undefined;
  }
}
