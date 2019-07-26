import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LanguageModule } from '@services/language';
import { AppReduxModule } from './redux/ngxs-singleton.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppReduxModule, // must be before any other module that uses store
    LanguageModule,
  ]
})
export class CoreModule { }
