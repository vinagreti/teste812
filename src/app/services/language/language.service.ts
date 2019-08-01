import { Location } from '@angular/common';
import { Injectable, NgZone } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { NavigationEnd, Router } from '@angular/router';
import { I18nLocale } from '@models/language';
import { TranslateService } from '@ngx-translate/core';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';
import { isLanguageUsedByThisApp } from './functions';
import { LanguageInitializerService } from './language-initializer.service';
import { ASetLanguage } from './language.actions';
import { LanguageState } from './language.state';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  @Select(LanguageState.language) language$: Observable<I18nLocale>;

  constructor(
    private dateAdapter: DateAdapter<Date>,
    private languageInitializer: LanguageInitializerService,
    private location: Location,
    private router: Router,
    private store: Store,
    private translateService: TranslateService,
    private ngZone: NgZone,
  ) {
    this.dateAdapter.localeChanges.subscribe(res => {
      console.log(`LOCALTION CHANGED`);
    })
    this.languageInitializer.initLanguageService();
    this.appendRouterEventHanler();
  }

  get language() {
    return this.getStoredLanguage();
  }

  setLanguage(language: I18nLocale) {
    if (language !== this.language) {
      this.setNewLanguage(language);
      return this.setStoreLanguage(language);
    } else {
      return this.returnStoreObservable();
    }
  }

  private returnStoreObservable() {
    const storeState = this.getStoredState();
    return of(storeState);
  }

  private setNewLanguage(language: I18nLocale) {
    this.dateAdapter.setLocale(language);
    this.translateService.use(language);
    this.addLanguageToUrl(language);
  }

  private setStoreLanguage(language: I18nLocale) {
    return this.store.dispatch(new ASetLanguage(language));
  }

  private getStoredState() {
    return this.store.selectSnapshot(LanguageState);
  }

  private getStoredLanguage() {
    return this.store.selectSnapshot(LanguageState.language);
  }

  private appendRouterEventHanler() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(navigated => {
      this.addLanguageToUrl(this.language);
    });
  }

  private mountI18nPath(language: I18nLocale) {
    const urlLanguage = this.getUrlLanguage();
    const isUsedByTheApp = isLanguageUsedByThisApp(urlLanguage as I18nLocale);
    const paths = this.location.path().split('/').splice(1);

    if (isUsedByTheApp) {
      const locationWithoutLanguage = paths.slice(1).join('/');
      if (locationWithoutLanguage) {
        language = `/${language}/${locationWithoutLanguage}` as I18nLocale;
      }
    } else {
      const locationWithoutLanguage = `${paths.join('/')}`;
      if (locationWithoutLanguage) {
        language = `/${language}/${locationWithoutLanguage}` as I18nLocale;
      }
    }
    return language;
  }

  private getUrlLanguage() {
    return this.location.path().split('/').splice(1)[0];
  }

  // avoids "Navigation triggered outside Angular zone" warning in unit tests
  // https://github.com/angular/angular/issues/25837
  private addLanguageToUrl(language: I18nLocale) {;
    const newPath = this.mountI18nPath(language);
    this.ngZone.run(() => {
      this.router.navigate([newPath], { replaceUrl: true, queryParamsHandling: 'preserve' });
    });
  }
}
