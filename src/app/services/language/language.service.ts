import { Injectable, Output } from '@angular/core';
import { AppLanguage } from '@models/language';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { ReplaySubject } from 'rxjs';
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
  ) {
    this.initService();
  }

  set language(lang: AppLanguage) {
    this.store.dispatch(new ASetLanguage(lang)).toPromise().then(() => {
      this.lang$.next(lang);
      this.translate.use(lang);
    });
  }

  get language() {
    return this.getStoreLanguage();
  }

  private initService() {
    const storeLanguage = this.getStoreLanguage();
    this.language = storeLanguage;
  }

  private getStoreLanguage() {
    return this.store.selectSnapshot(LanguageState.language);
  }

}
