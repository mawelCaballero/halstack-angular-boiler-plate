import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaWithHelperTextComponent } from './textarea-with-helper-text.component';
import { DxcTextareaModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [TextareaWithHelperTextComponent],
  imports: [
    CommonModule, ThemeModule,DxcTextareaModule
  ], exports: [TextareaWithHelperTextComponent]
})
export class TextareaWithHelperTextModule { }
