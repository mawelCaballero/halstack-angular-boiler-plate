import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxcRadioGroupModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';
import { RadioGroupOptionalComponent } from './radio-group-optional.component';

const routes: Routes = [
  {
    path: '',
    component: RadioGroupOptionalComponent,
  },
];
@NgModule({
  declarations: [RadioGroupOptionalComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcRadioGroupModule,
    RouterModule.forChild(routes),
  ],
  exports: [RadioGroupOptionalComponent],
})
export class RadioGroupOptionalModule {}
