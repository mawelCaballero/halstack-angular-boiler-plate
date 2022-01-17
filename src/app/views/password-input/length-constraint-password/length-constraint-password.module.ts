import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LengthConstraintPasswordComponent } from './length-constraint-password.component';
import { DxcPasswordInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [LengthConstraintPasswordComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcPasswordInputModule
  ], exports: [LengthConstraintPasswordComponent]
})
export class LengthConstraintPasswordModule { }
