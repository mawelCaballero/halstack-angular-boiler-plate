import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UncontrolledSliderComponent } from './uncontrolled-slider.component';
import { DxcSliderModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UncontrolledSliderComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSliderModule,
    RouterModule.forChild([
      {
        path: '',
        component: UncontrolledSliderComponent,
      },
    ])
  ]
})
export class UncontrolledSliderModule { }
