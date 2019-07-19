import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MatButtonModule,
    TranslateModule,
  ]
})
export class DemoModule { }
