import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomErrorDateInputComponent } from './custom-error-date-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxcDateInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [CustomErrorDateInputComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DxcDateInputModule,
    ThemeModule
  ],
  exports: [CustomErrorDateInputComponent]
})
export class CustomErrorDateInputModule { }
