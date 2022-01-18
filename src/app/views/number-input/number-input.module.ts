import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledNumberComponent } from './controlled-number/controlled-number.component';
import { UncontrolledNumberComponent } from './uncontrolled-number/uncontrolled-number.component';
import { HelperTextNumberComponent } from './helper-text-number/helper-text-number.component';
import { PlaceholderNumberComponent } from './placeholder-number/placeholder-number.component';
import { PreffixNumberComponent } from './preffix-number/preffix-number.component';
import { SuffixNumberComponent } from './suffix-number/suffix-number.component';
import { OptionalNumberComponent } from './optional-number/optional-number.component';
import { DisabledNumberComponent } from './disabled-number/disabled-number.component';
import { InvalidNumberComponent } from './invalid-number/invalid-number.component';
import { MinMaxStepNumberComponent } from './min-max-step-number/min-max-step-number.component';
import { CustomErrorNumberComponent } from './custom-error-number/custom-error-number.component';
import { FillParentSizeNumberComponent } from './fill-parent-size-number/fill-parent-size-number.component';
import { ControlledNumberModule } from './controlled-number/controlled-number.module';
import { CustomErrorNumberModule } from './custom-error-number/custom-error-number.module';
import { DisabledNumberModule } from './disabled-number/disabled-number.module';
import { FillParentSizeNumberModule } from './fill-parent-size-number/fill-parent-size-number.module';
import { HelperTextNumberModule } from './helper-text-number/helper-text-number.module';
import { InvalidNumberModule } from './invalid-number/invalid-number.module';
import { MinMaxStepNumberModule } from './min-max-step-number/min-max-step-number.module';
import { OptionalNumberModule } from './optional-number/optional-number.module';
import { PlaceholderNumberModule } from './placeholder-number/placeholder-number.module';
import { PreffixNumberModule } from './preffix-number/preffix-number.module';
import { SuffixNumberModule } from './suffix-number/suffix-number.module';
import { UncontrolledNumberModule } from './uncontrolled-number/uncontrolled-number.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ControlledNumberModule,
    CustomErrorNumberModule,
    DisabledNumberModule,
    FillParentSizeNumberModule,
    HelperTextNumberModule,
    InvalidNumberModule,
    MinMaxStepNumberModule,
    OptionalNumberModule,
    PlaceholderNumberModule,
    PreffixNumberModule,
    SuffixNumberModule,
    UncontrolledNumberModule
  ]
})
export class NumberInputModule { }