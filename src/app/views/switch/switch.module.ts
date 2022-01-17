import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledSwitchModule } from './controlled-switch/controlled-switch.module';
import { DxcSwitchModule } from '@dxc-technology/halstack-angular';
import { UncontrolledSwitchModule } from './uncontrolled-switch/uncontrolled-switch.module';
import { LabelPositionSwitchModule } from './label-position-switch/label-position-switch.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ControlledSwitchModule,
    LabelPositionSwitchModule,
    UncontrolledSwitchModule
  ]
})
export class SwitchModule { }
