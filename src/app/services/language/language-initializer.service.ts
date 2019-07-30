import { Location } from '@angular/common';
import { Inject, Injectable, LOCALE_ID, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { I18nLocale } from '@models/language';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { getAppGenericaLanguage } from './functions';
import { ASetLanguage } from './language.actions';
import { LanguageState } from './language.state';

@Injectable()
export class LanguageInitializerService {

  private appConfig = environment;

  constructor(
    private location: Location,
    private ngZone: NgZone,
    private router: Router,
    private store: Store,
    private translate: TranslateService,
    @Inject(LOCALE_ID) private localeId: string,
  ) { }

  initLanguageService() {
    this.detectFlowAntInitializate();
  }

  private detectFlowAntInitializate() {
    const urlLanguage = this.getGenericLanguageFromUrl();
    if (urlLanguage) {
      this.runUrlConfiguratinoFlow(urlLanguage);
    } else {
      const storeLanguage = this.getGenericStoredLanguage();
      if (storeLanguage) {
        this.runStoreConfiguratinoFlow(storeLanguage);
      } else {
        const browsersLanguage = this.getBrowsersGenericLanguage();
        if (browsersLanguage) {
          this.runBrowserConfiguratinoFlow(browsersLanguage);
        } else {
          this.runDefaultConfiguratinoFlow();
        }
      }
    }
  }

  private getStoredLanguage() {
    return this.store.selectSnapshot(LanguageState.language);
  }

  private getGenericLanguageFromUrl() {
    const pathSlices = this.location.path().split('/').filter(slice => !!slice);
    const languageInUrl = getAppGenericaLanguage(pathSlices[0] as I18nLocale);
    return languageInUrl;
  }

  private getGenericStoredLanguage() {
    const storeLanguage = this.getStoredLanguage();
    return getAppGenericaLanguage(storeLanguage);
  }

  private getBrowsersGenericLanguage() {
    const browsersLanguage = this.localeId;
    return getAppGenericaLanguage(browsersLanguage);
  }

  private runUrlConfiguratinoFlow(language: I18nLocale) {
    this.setStoreLanguage(language);
    this.setTranslateServiceLanguage(language);
  }

  private runStoreConfiguratinoFlow(language: I18nLocale) {
    this.setUrlLanguage(language);
    this.setTranslateServiceLanguage(language);
  }

  private runBrowserConfiguratinoFlow(language: I18nLocale) {
    this.setStoreLanguage(language);
    this.setUrlLanguage(language);
    this.setTranslateServiceLanguage(language);
  }

  private runDefaultConfiguratinoFlow() {
    this.setStoreLanguage(this.appConfig.defaultLanguage);
    this.setUrlLanguage(this.appConfig.defaultLanguage);
    this.setTranslateServiceLanguage(this.appConfig.defaultLanguage);
  }

  private setStoreLanguage(language: I18nLocale) {
    return this.store.dispatch(new ASetLanguage(language));
  }

  private setUrlLanguage(language: I18nLocale) {
    this.addLanguageToUrl(language);
  }

  private setTranslateServiceLanguage(language: I18nLocale) {
    this.translate.use(language);
  }

  private mountI18nPath(language: I18nLocale) {
    return `${language}/${this.location.path()}`;
  }

  // avoids "Navigation triggered outside Angular zone" warning in unit tests
  // https://github.com/angular/angular/issues/25837
  private addLanguageToUrl(language: I18nLocale) {
    const newPath = this.mountI18nPath(language);
    this.ngZone.run(() => {
      this.router.navigate([newPath], { replaceUrl: true, queryParamsHandling: 'preserve' });
    });
  }
}
