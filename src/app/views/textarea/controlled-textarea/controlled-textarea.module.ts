import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledTextareaComponent } from './controlled-textarea.component';
import { DxcTextareaModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [ControlledTextareaComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule
  ],exports: [ControlledTextareaComponent]
})
export class ControlledTextareaModule { }
