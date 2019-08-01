import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NativeDateModule } from '@angular/material/core';
import { NgxsModule } from '@ngxs/store';
import { AppLanguageLocaleInitializer } from '../functions';
import { LanguageState } from '../language.state';
import { LanguageInitializerServiceTestingModule } from './language-initializer-testing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LanguageInitializerServiceTestingModule,
    NgxsModule.forRoot([LanguageState]),
    NativeDateModule,
  ],
  providers: [
    AppLanguageLocaleInitializer,
  ]
})
export class LanguageServiceTestingModule { }
