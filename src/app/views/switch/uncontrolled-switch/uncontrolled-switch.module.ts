import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UncontrolledSwitchComponent } from './uncontrolled-switch.component';
import { DxcSwitchModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [UncontrolledSwitchComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSwitchModule
  ],exports: [UncontrolledSwitchComponent]
})
export class UncontrolledSwitchModule { }
