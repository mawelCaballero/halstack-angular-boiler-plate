import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelPositionSwitchComponent } from './label-position-switch.component';
import { DxcSwitchModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [LabelPositionSwitchComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSwitchModule
  ], exports: [LabelPositionSwitchComponent]
})
export class LabelPositionSwitchModule { }
