import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaWithPlaceholderComponent } from './textarea-with-placeholder.component';
import { DxcTextareaModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [TextareaWithPlaceholderComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule
  ],exports: [TextareaWithPlaceholderComponent]
})
export class TextareaWithPlaceholderModule { }
