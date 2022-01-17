import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcDateInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { ControlledDateInputComponent } from './controlled-date-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ControlledDateInputComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DxcDateInputModule,
    ThemeModule
  ],
  exports: [ControlledDateInputComponent]
})
export class ControlledDateInputModule { }
