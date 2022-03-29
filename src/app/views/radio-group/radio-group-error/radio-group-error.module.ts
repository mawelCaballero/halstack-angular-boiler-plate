import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxcRadioGroupModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';
import { RadioGroupErrorComponent } from './radio-group-error.component';

const routes: Routes = [
  {
    path: '',
    component: RadioGroupErrorComponent,
  },
];
@NgModule({
  declarations: [RadioGroupErrorComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcRadioGroupModule,
    RouterModule.forChild(routes),
  ],
  exports: [RadioGroupErrorComponent],
})
export class RadioGroupErrorModule {}
