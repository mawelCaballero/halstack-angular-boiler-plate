import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaWithLengthConstraintComponent } from './textarea-with-length-constraint.component';
import { DxcTextareaModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [TextareaWithLengthConstraintComponent],
  imports: [
    CommonModule, ThemeModule, DxcTextareaModule
  ], exports: [TextareaWithLengthConstraintComponent]
})
export class TextareaWithLengthConstraintModule { }
