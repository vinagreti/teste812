import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar';
import { AppWrapperPrivateComponent } from './app-wrapper-private.component';

@NgModule({
  declarations: [AppWrapperPrivateComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
  ],
  exports: [AppWrapperPrivateComponent]
})
export class AppWrapperPrivateModule { }
