import { Injectable, Output } from '@angular/core';
import { AppLanguage } from '@models/language';
import { TranslateService } from '@ngx-translate/core';
import { ReplaySubject } from 'rxjs';
import { environment } from '@env/environment';

export const LANGUAGE_SERVICE_NAMESPACE = 'AppLanguage';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  @Output() languageChange: ReplaySubject<AppLanguage> = new ReplaySubject(undefined);

  constructor(
    private translate: TranslateService,
  ) {
    this.start();
  }

  setLanguage(lang: AppLanguage) {
    this.setInMemory(lang);
    this.languageChange.next(lang);
    this.translate.use(lang);
  }

  getLanguage() {
    return this.getInMemory();
  }

  private start() {
    const startupLanguage: AppLanguage = this.getStartupLanguage();
    this.setLanguage(startupLanguage);
  }

  private setInMemory(lang: AppLanguage) {
    localStorage.setItem(LANGUAGE_SERVICE_NAMESPACE, lang);
  }

  private getInMemory(): AppLanguage {
    return localStorage.getItem(LANGUAGE_SERVICE_NAMESPACE) as AppLanguage;
  }

  private getStartupLanguage(): AppLanguage {
    let language = environment.defaultLanguage;
    const inMemoryLanguage = this.getInMemory();
    const validInMemoryLanguage = this.getValidLanguage(inMemoryLanguage);
    if (validInMemoryLanguage) {
      language = validInMemoryLanguage;
    } else {
      const browserLanguage = navigator.language || (navigator as any).userLanguage;
      const validBrowserLanguage = this.getValidLanguage(browserLanguage);
      if (validBrowserLanguage) {
        language = validBrowserLanguage;
      }
    }
    return language;
  }

  private getValidLanguage(lang: AppLanguage): AppLanguage {
    const genericLanguage = this.getGenericLanguage(lang);
    const languageIsValid = this.isValidLanguage(genericLanguage);
    if (languageIsValid) {
      return genericLanguage;
    } else {
      return undefined;
    }
  }

  private getGenericLanguage(lang: AppLanguage): AppLanguage {
    return ((lang && lang.length > 1) ? lang.substr(0, 2) : lang) as AppLanguage;
  }

  private isValidLanguage(lang: AppLanguage) {
    return Object.values(AppLanguage).includes(lang);
  }
}
