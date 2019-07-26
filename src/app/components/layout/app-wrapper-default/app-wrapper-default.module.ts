import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar';
import { AppWrapperDefaultComponent } from './app-wrapper-default.component';



@NgModule({
  declarations: [AppWrapperDefaultComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
  ],
  exports: [AppWrapperDefaultComponent]
})
export class AppWrapperDefaultModule { }
