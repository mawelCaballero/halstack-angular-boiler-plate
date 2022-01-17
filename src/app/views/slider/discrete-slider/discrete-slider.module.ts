import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscreteSliderComponent } from './discrete-slider.component';
import { DxcSliderModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [DiscreteSliderComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSliderModule
  ], exports: [DiscreteSliderComponent]
})
export class DiscreteSliderModule { }
