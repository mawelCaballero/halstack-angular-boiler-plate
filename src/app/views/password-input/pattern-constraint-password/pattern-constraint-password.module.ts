import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcPasswordInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { PatternConstraintPasswordComponent } from './pattern-constraint-password.component';



@NgModule({
  declarations: [PatternConstraintPasswordComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcPasswordInputModule
  ], exports: [PatternConstraintPasswordComponent]
})
export class PatternConstraintPasswordModule { }
