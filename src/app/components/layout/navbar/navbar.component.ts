import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { AppLanguage } from '@models/language';
import { LanguageService } from '@services/language';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  appLanguages = [environment.defaultLanguage, ...environment.extraLanguages];

  lang$: Observable<AppLanguage>;

  languages = AppLanguage;

  constructor(
    private languageService: LanguageService,
  ) { }

  ngOnInit() {
    this.lang$ = this.languageService.lang$;
  }

  setLanguage(lang: AppLanguage) {
    this.languageService.language = lang;
  }

}
