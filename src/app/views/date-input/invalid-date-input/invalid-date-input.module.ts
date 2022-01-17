import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvalidDateInputComponent } from './invalid-date-input.component';
import { DxcDateInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [InvalidDateInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcDateInputModule
  ],
  exports: [InvalidDateInputComponent]
})
export class InvalidDateInputModule { }
