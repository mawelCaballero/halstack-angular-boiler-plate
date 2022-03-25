import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledSelectComponent } from './controlled-select.component';
import {
  DxcButtonModule,
  DxcSelectModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ControlledSelectComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSelectModule,
    DxcButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ControlledSelectComponent,
      },
    ]),
  ],
})
export class ControlledSelectModule {}
