import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizedSliderComponent } from './sized-slider.component';
import { DxcSliderModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [SizedSliderComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSliderModule
  ], exports: [SizedSliderComponent]
})
export class SizedSliderModule { }
