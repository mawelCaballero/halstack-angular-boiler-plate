import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaWithCustomErrorComponent } from './textarea-with-custom-error.component';
import { DxcTextareaModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [TextareaWithCustomErrorComponent],
  imports: [
    CommonModule, ThemeModule, DxcTextareaModule
  ], exports: [TextareaWithCustomErrorComponent]
})
export class TextareaWithCustomErrorModule { }
