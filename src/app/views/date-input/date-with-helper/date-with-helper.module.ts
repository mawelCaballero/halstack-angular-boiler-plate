import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateWithHelperComponent } from './date-with-helper.component';
import { DxcDateInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [DateWithHelperComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DxcDateInputModule,
    ThemeModule
  ],
  exports: [DateWithHelperComponent]
})
export class DateWithHelperModule { }
