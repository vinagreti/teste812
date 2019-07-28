import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NgxsModule } from '@ngxs/store';
import { NotFoundPageComponent } from 'src/app/pages/static/not-found-page/not-found-page.component';
import { NotFoundPageModule } from 'src/app/pages/static/not-found-page/not-found-page.module';
import { LanguageState } from '../language.state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forRoot(),
    NgxsModule.forRoot([LanguageState]),
    NotFoundPageModule,
    RouterTestingModule.withRoutes([
      { path: 'pt', component: NotFoundPageComponent }
    ]),
  ],
  exports: [
    TranslateModule
  ]
})
export class LanguageServiceTestingModule { }
