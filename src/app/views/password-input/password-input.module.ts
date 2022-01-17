import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledPasswordModule } from './controlled-password/controlled-password.module';
import { CustomErrorPasswordModule } from './custom-error-password/custom-error-password.module';
import { FillParentSizePasswordModule } from './fill-parent-size-password/fill-parent-size-password.module';
import { LengthConstraintPasswordModule } from './length-constraint-password/length-constraint-password.module';
import { PatternConstraintPasswordModule } from './pattern-constraint-password/pattern-constraint-password.module';
import { UncontrolledPasswordModule } from './uncontrolled-password/uncontrolled-password.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ControlledPasswordModule,
    CustomErrorPasswordModule,
    FillParentSizePasswordModule,
    LengthConstraintPasswordModule,
    PatternConstraintPasswordModule,
    UncontrolledPasswordModule
  ]
})
export class PasswordInputModule { }
