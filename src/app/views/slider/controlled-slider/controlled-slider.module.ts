import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledSliderComponent } from './controlled-slider.component';
import { DxcSliderModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [ControlledSliderComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSliderModule
  ],exports: [ControlledSliderComponent]
})
export class ControlledSliderModule { }
