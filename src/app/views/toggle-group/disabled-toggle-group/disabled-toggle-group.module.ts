import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisabledToggleGroupComponent } from './disabled-toggle-group.component';
import { DxcToggleGroupModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [DisabledToggleGroupComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcToggleGroupModule
  ], exports: [DisabledToggleGroupComponent]
})
export class DisabledToggleGroupModule { }
