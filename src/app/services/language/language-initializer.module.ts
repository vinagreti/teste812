import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageInitializerService } from './language-initializer.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [
    LanguageInitializerService,
  ],
})
export class LanguageInitializerModule { }
