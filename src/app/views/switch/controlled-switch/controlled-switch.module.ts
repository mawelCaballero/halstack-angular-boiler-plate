import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledSwitchComponent } from './controlled-switch.component';
import { DxcSwitchModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [ControlledSwitchComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSwitchModule
  ], exports: [ControlledSwitchComponent]
})
export class ControlledSwitchModule { }
