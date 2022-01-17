import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledDateComponent } from './controlled-date.component';
import { DxcDateModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ControlledDateComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DxcDateModule,
    ThemeModule
  ],
  exports: [ControlledDateComponent]
})
export class ControlledDateModule { }
