import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithPatternConstraintComponent } from './input-with-pattern-constraint.component';
import { DxcTextInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [InputWithPatternConstraintComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule
  ], exports: [InputWithPatternConstraintComponent]
})
export class InputWithPatternConstraintModule { }
