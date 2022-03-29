import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxcRadioGroupModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';
import { RadioGroupStackingComponent } from './radio-group-stacking.component';

const routes: Routes = [
  {
    path: '',
    component: RadioGroupStackingComponent,
  },
];
@NgModule({
  declarations: [RadioGroupStackingComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcRadioGroupModule,
    RouterModule.forChild(routes),
  ],
  exports: [RadioGroupStackingComponent],
})
export class RadioGroupStackingModule {}
