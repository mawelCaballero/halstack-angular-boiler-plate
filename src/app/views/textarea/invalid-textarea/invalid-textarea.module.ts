import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvalidTextareaComponent } from './invalid-textarea.component';
import { DxcTextareaModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [InvalidTextareaComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule
  ],exports: [InvalidTextareaComponent]
})
export class InvalidTextareaModule { }
