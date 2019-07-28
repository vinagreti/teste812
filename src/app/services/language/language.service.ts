import { Location } from '@angular/common';
import { Inject, Injectable, LOCALE_ID, NgZone, Output } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { AppLanguage } from '@models/language';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { ReplaySubject } from 'rxjs';
import { getAppGenericaLanguage, isLanguageUsedByThisApp } from './functions';
import { ASetLanguage } from './language.actions';
import { LanguageState } from './language.state';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  @Output() lang$: ReplaySubject<AppLanguage> = new ReplaySubject(undefined);

  constructor(
    private translate: TranslateService,
    private store: Store,
    private location: Location,
    private router: Router,
    private ngZone: NgZone,
    @Inject(LOCALE_ID) private localeId: string,
  ) {
    this.initService();
    this.detectLanguageInUrl();
  }

  set language(lang: AppLanguage) {
    this.setLanguageInStore(lang).toPromise().then(() => {
      this.lang$.next(lang);
      this.translate.use(lang);
      this.setLanguageInUrl(lang);
    });
  }

  get language() {
    return this.getStoreLanguage();
  }

  private setLanguageInStore(lang: AppLanguage) {
    return this.store.dispatch(new ASetLanguage(lang));
  }

  private initService() {
    this.language = this.getStartupLanguage();
  }

  private getStartupLanguage() {
    const urlLanguage = this.detectLanguageInUrl();
    if (urlLanguage) {
      return urlLanguage;
    } else {
      const storeLanguage = this.getStoreLanguage();
      if (storeLanguage && isLanguageUsedByThisApp(storeLanguage)) {
        return storeLanguage;
      } else {
        const browserLanguage = getAppGenericaLanguage(this.localeId);
        if (browserLanguage) {
          return browserLanguage;
        } else {
          return environment.defaultLanguage;
        }
      }
    }
  }

  private detectLanguageInUrl() {
    const languageInUrl = this.extractAppLanguageFromUrl(this.location.path());
    if (languageInUrl) {
      return languageInUrl;
    } else {
      return undefined;
    }
  }

  private getStoreLanguage() {
    return this.store.selectSnapshot(LanguageState.language);
  }

  private extractAppLanguageFromUrl(url: string) {
    const pathSlices = url.split('/').filter(slice => !!slice);
    if (pathSlices.length) {
      const languageInUrl =  pathSlices[0] as AppLanguage;
      const isLanguageInUrlValid = isLanguageUsedByThisApp(languageInUrl);
      if (isLanguageInUrlValid) {
        return languageInUrl;
      } else {
        return '';
      }
    } else {
      return '';
    }
  }

  private setLanguageInUrl(language: AppLanguage) {
    const isLanguageDefault = language === environment.defaultLanguage;
    if (isLanguageDefault) {
      this.setUrl('');
    } else {
      this.setUrl(language);
    }
  }

  private setUrl(language: string) {
    const newPath = this.setLanguageInLocationPath(this.location.path(), language);
    this.runInNgZone(newPath);
  }

  // avoids "Navigation triggered outside Angular zone" warning in unit tests
  // https://github.com/angular/angular/issues/25837
  private runInNgZone(newPath: string) {
    this.ngZone.run(() => {
      this.router.navigate([newPath], { replaceUrl: true, queryParamsHandling: 'preserve' });
    });
  }

  private setLanguageInLocationPath(locationPath, languagePath: string) {
    const languageInUrl = this.extractAppLanguageFromUrl(locationPath);
    if (languageInUrl) {
      const finalPath = locationPath.replace(languageInUrl, languagePath);
      return finalPath;
    } else if (languagePath) {
      const finalPath = `/${languagePath}${locationPath}`;
      return finalPath;
    } else {
      return locationPath;
    }
  }

}
