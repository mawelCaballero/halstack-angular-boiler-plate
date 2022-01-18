import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillParentSizeTextareaComponent } from './fill-parent-size-textarea.component';
import { DxcTextareaModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [FillParentSizeTextareaComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule
  ], exports: [FillParentSizeTextareaComponent]
})
export class FillParentSizeTextareaModule { }
