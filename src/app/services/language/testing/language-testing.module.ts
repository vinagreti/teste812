import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { LanguageState } from '../language.state';
import { LanguageInitializerServiceTestingModule } from './language-initializer-testing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LanguageInitializerServiceTestingModule,
    NgxsModule.forRoot([LanguageState]),
  ]
})
export class LanguageServiceTestingModule { }
