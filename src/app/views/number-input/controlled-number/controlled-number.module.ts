import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledNumberComponent } from './controlled-number.component';
import { DxcNumberInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [ControlledNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule
  ], exports: [ControlledNumberComponent]
})
export class ControlledNumberModule { }
