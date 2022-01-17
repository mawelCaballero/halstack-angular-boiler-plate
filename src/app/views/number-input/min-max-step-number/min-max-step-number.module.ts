import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinMaxStepNumberComponent } from './min-max-step-number.component';
import { DxcNumberInputModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [MinMaxStepNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule
  ],
  exports: [MinMaxStepNumberComponent]
})
export class MinMaxStepNumberModule { }
