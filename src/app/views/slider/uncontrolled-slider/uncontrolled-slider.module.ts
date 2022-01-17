import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UncontrolledSliderComponent } from './uncontrolled-slider.component';
import { DxcSliderModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [UncontrolledSliderComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSliderModule
  ], exports: [UncontrolledSliderComponent]
})
export class UncontrolledSliderModule { }
