import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcDateInputModule } from '@dxc-technology/halstack-angular';
import { ControlledDateInputModule } from './controlled-date-input/controlled-date-input.module';
import { ControlledDateModule } from '../date/controlled-date/controlled-date.module';
import { ControlledDateInputComponent } from './controlled-date-input/controlled-date-input.component';
import { UncontrolledDateInputModule } from './uncontrolled-date-input/uncontrolled-date-input.module';
import { CustomErrorDateInputModule } from './custom-error-date-input/custom-error-date-input.module';
import { DateWithHelperModule } from './date-with-helper/date-with-helper.module';
import { DisabledDateInputModule } from './disabled-date-input/disabled-date-input.module';
import { FillParentSizedDateInputModule } from './fill-parent-sized-date-input/fill-parent-sized-date-input.module';
import { FormattedDateInputModule } from './formatted-date-input/formatted-date-input.module';
import { InvalidDateInputModule } from './invalid-date-input/invalid-date-input.module';
import { OptionalDateInputModule } from './optional-date-input/optional-date-input.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DxcDateInputModule,
    ControlledDateInputModule,
    UncontrolledDateInputModule,
    CustomErrorDateInputModule,
    DateWithHelperModule,
    DisabledDateInputModule,
    FillParentSizedDateInputModule,
    FormattedDateInputModule,
    InvalidDateInputModule,
    OptionalDateInputModule
  ],
  exports: []
})
export class DateInputModule { }
