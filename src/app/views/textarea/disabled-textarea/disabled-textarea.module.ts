import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisabledTextareaComponent } from './disabled-textarea.component';
import { DxcTextareaModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [DisabledTextareaComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule
  ], exports: [DisabledTextareaComponent,]
})
export class DisabledTextareaModule { }
