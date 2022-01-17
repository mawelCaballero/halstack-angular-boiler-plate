import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioControlledModule } from './radio-controlled/radio-controlled.module';
import { RadioGroupModule } from './radio-group/radio-group.module';
import { RadioLabelPositionModule } from './radio-label-position/radio-label-position.module';
import { RadioSizedModule } from './radio-sized/radio-sized.module';
import { RadioUncontrolledModule } from './radio-uncontrolled/radio-uncontrolled.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RadioControlledModule,
    RadioGroupModule,
    RadioLabelPositionModule,
    RadioSizedModule,
    RadioUncontrolledModule

  ]
})
export class RadioButtonModule { }
