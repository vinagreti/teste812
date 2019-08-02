import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarModule } from '../navbar';
import { AppWrapperPublicComponent } from './app-wrapper-public.component';

@NgModule({
  declarations: [AppWrapperPublicComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavbarModule,
  ],
  exports: [AppWrapperPublicComponent]
})
export class AppWrapperPublicModule { }
