import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxcRadioGroupModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';
import { RadioGroupControlledComponent } from './radio-group-controlled.component';

const routes: Routes = [
  {
    path: '',
    component: RadioGroupControlledComponent,
  },
];
@NgModule({
  declarations: [RadioGroupControlledComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcRadioGroupModule,
    RouterModule.forChild(routes),
  ],
  exports: [RadioGroupControlledComponent],
})
export class RadioGroupControlledModule {}
