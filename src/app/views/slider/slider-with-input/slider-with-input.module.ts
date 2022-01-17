import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderWithInputComponent } from './slider-with-input.component';
import { DxcSliderModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [SliderWithInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSliderModule
  ],exports: [SliderWithInputComponent]
})
export class SliderWithInputModule { }
