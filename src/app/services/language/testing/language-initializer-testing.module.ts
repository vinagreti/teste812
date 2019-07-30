import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from '@env/environment';
import { TranslateModule } from '@ngx-translate/core';
import { NgxsModule } from '@ngxs/store';
import { NotFoundPageComponent } from 'src/app/pages/static/not-found-page/not-found-page.component';
import { NotFoundPageModule } from 'src/app/pages/static/not-found-page/not-found-page.module';
import { LanguageInitializerModule } from '../language-initializer.module';
import { LanguageState } from '../language.state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LanguageInitializerModule,
    NotFoundPageModule,
    TranslateModule.forRoot(),
    NgxsModule.forRoot([LanguageState]),
    RouterTestingModule.withRoutes([
      { path: environment.defaultLanguage, component: NotFoundPageComponent },
      { path: environment.extraLanguages[0], component: NotFoundPageComponent },
    ]),
  ]
})
export class LanguageInitializerServiceTestingModule { }
