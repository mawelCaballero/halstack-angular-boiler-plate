import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisabledSliderComponent } from './disabled-slider.component';
import { DxcSliderModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [DisabledSliderComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSliderModule
  ],exports: [DisabledSliderComponent]
})
export class DisabledSliderModule { }
