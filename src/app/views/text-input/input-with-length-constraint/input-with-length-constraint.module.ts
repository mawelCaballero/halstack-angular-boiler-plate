import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithLengthConstraintComponent } from './input-with-length-constraint.component';
import { DxcTextInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [InputWithLengthConstraintComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule
  ], exports: [InputWithLengthConstraintComponent]
})
export class InputWithLengthConstraintModule { }
