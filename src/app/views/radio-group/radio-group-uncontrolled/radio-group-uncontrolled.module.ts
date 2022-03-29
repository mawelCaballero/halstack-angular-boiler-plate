import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DxcRadioGroupModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';
import { RadioGroupUncontrolledComponent } from './radio-group-uncontrolled.component';

const routes: Routes = [
  {
    path: '',
    component: RadioGroupUncontrolledComponent,
  },
];
@NgModule({
  declarations: [RadioGroupUncontrolledComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcRadioGroupModule,
    RouterModule.forChild(routes),
  ],
  exports: [RadioGroupUncontrolledComponent],
})
export class RadioGroupUncontrolledModule {}
