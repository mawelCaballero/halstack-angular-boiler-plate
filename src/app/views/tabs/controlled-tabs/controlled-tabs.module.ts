import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledTabsComponent } from './controlled-tabs.component';
import { DxcTabsModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [ControlledTabsComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTabsModule
  ],exports: [ControlledTabsComponent]
})
export class ControlledTabsModule { }
