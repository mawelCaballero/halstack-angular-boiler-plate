import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcDateModule, ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';
import { ControlledDateComponent } from './controlled-date/controlled-date.component';
import { SizedDateComponent } from './sized-date/sized-date.component';
import { UncontrolledDateComponent } from './uncontrolled-date/uncontrolled-date.component';
import { ControlledDateInputComponent } from '../date-input/controlled-date-input/controlled-date-input.component';
import { UncontrolledDateInputComponent } from '../date-input/uncontrolled-date-input/uncontrolled-date-input.component';
import { DateWithHelperComponent } from '../date-input/date-with-helper/date-with-helper.component';
import { FormattedDateInputComponent } from '../date-input/formatted-date-input/formatted-date-input.component';
import { OptionalDateInputComponent } from '../date-input/optional-date-input/optional-date-input.component';
import { DisabledDateInputComponent } from '../date-input/disabled-date-input/disabled-date-input.component';
import { InvalidDateInputComponent } from '../date-input/invalid-date-input/invalid-date-input.component';
import { CustomErrorDateInputComponent } from '../date-input/custom-error-date-input/custom-error-date-input.component';
import { FillParentSizedDateInputComponent } from '../date-input/fill-parent-sized-date-input/fill-parent-sized-date-input.component';
import { ControlledDateModule } from './controlled-date/controlled-date.module';
import { SizedDateModule } from './sized-date/sized-date.module';
import { UncontrolledDateModule } from './uncontrolled-date/uncontrolled-date.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    DxcDateModule,
    ControlledDateModule,
    SizedDateModule,
    UncontrolledDateModule,
    ThemeModule
  ],
  exports: [

  ],
  providers: [ { provide: 'ThemeService', useClass: ThemeService }],

})
export class DateModule { }
