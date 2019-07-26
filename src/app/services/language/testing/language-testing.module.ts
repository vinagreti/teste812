import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgxsModule } from '@ngxs/store';
import { LanguageState } from '../language.state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule.forRoot(),
    NgxsModule.forRoot([LanguageState]),
  ],
  exports: [
    TranslateModule
  ]
})
export class LanguageServiceTestingModule { }
