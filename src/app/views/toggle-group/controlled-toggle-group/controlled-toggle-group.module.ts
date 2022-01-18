import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledToggleGroupComponent } from './controlled-toggle-group.component';
import { DxcToggleGroupModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [ControlledToggleGroupComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcToggleGroupModule
  ], exports: [ ControlledToggleGroupComponent ]
})
export class ControlledToggleGroupModule { }
