import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppLanguage } from '@models/language';
import { LanguageService } from '@services/language';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

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
