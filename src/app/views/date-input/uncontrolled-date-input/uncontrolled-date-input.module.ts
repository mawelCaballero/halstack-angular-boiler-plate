import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcDateInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UncontrolledDateInputComponent } from './uncontrolled-date-input.component';

@NgModule({
  declarations: [UncontrolledDateInputComponent],
  imports: [
    CommonModule,
    DxcDateInputModule,
    BrowserAnimationsModule,
    ThemeModule
  ],
  exports: [UncontrolledDateInputComponent]
})
export class UncontrolledDateInputModule { }
