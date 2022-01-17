import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinuousSliderComponent } from './continuous-slider.component';
import { DxcSliderModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [ContinuousSliderComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSliderModule
  ], exports: [ContinuousSliderComponent]
})
export class ContinuousSliderModule { }
