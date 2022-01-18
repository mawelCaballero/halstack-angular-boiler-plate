import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaWithPatternConstraintComponent } from './textarea-with-pattern-constraint.component';
import { DxcTextareaModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [TextareaWithPatternConstraintComponent],
  imports: [
    CommonModule, ThemeModule, DxcTextareaModule
  ], exports: [TextareaWithPatternConstraintComponent]
})
export class TextareaWithPatternConstraintModule { }
