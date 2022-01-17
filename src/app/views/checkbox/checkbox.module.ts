import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxControlledModule } from './checkbox-controlled/checkbox-controlled.module';
import { CheckboxSizedModule } from './checkbox-sized/checkbox-sized.module';
import { CheckboxLabelPositionModule } from './checkbox-label-position/checkbox-label-position.module';
import { CheckboxUncontrolledModule } from './checkbox-uncontrolled/checkbox-uncontrolled.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    CheckboxControlledModule,
    CheckboxUncontrolledModule,
    CheckboxSizedModule,
    CheckboxLabelPositionModule,
  ],
})
export class CheckboxModule {}
