import { Inject, Injectable, LOCALE_ID, Output } from '@angular/core';
import { environment } from '@env/environment';
import { AppLanguage } from '@models/language';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { ReplaySubject } from 'rxjs';
import { getAppGenericaLanguage } from './functions';
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
    @Inject(LOCALE_ID) private localeId: string,
  ) {
    this.initService();
  }

  set language(lang: AppLanguage) {
    this.setLanguageInStore(lang).toPromise().then(() => {
      this.lang$.next(lang);
      this.translate.use(lang);
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
    const storeLanguage = this.getStoreLanguage();
    if (storeLanguage) {
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

  private getStoreLanguage() {
    return this.store.selectSnapshot(LanguageState.language);
  }

}
