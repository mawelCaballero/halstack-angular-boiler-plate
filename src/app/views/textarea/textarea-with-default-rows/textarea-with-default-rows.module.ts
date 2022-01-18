import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaWithDefaultRowsComponent } from './textarea-with-default-rows.component';
import { DxcTextareaModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [TextareaWithDefaultRowsComponent],
  imports: [
    CommonModule, ThemeModule, DxcTextareaModule
  ], exports: [TextareaWithDefaultRowsComponent]
})
export class TextareaWithDefaultRowsModule { }
