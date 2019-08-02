import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar';
import { AppWrapperNonAuthComponent } from './app-wrapper-non-auth.component';



@NgModule({
  declarations: [AppWrapperNonAuthComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
  ],
  exports: [AppWrapperNonAuthComponent]
})
export class AppWrapperNonAuthModule { }
