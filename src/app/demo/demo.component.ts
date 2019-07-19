import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { AppLanguage } from '@models/language';
import { LanguageService } from '@core/language';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent {

  lang$: Observable<AppLanguage>;

  languages = AppLanguage;

  constructor(
    private lang: LanguageService
  ) {
    this.lang$ = lang.languageChange;
  }

  setLanguage(lang: AppLanguage) {
    this.lang.setLanguage(lang);
  }

}
