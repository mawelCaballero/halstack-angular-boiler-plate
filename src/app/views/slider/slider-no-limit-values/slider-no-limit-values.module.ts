import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderNoLimitValuesComponent } from './slider-no-limit-values.component';
import { DxcSliderModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [SliderNoLimitValuesComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSliderModule
  ],exports: [SliderNoLimitValuesComponent]
})
export class SliderNoLimitValuesModule { }
