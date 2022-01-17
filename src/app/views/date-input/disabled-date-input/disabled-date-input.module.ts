import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisabledDateInputComponent } from './disabled-date-input.component';
import { DxcDateInputModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [DisabledDateInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcDateInputModule
  ],
  exports: [DisabledDateInputComponent]
})
export class DisabledDateInputModule { }
