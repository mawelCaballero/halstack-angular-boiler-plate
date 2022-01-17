import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormattedDateInputComponent } from './formatted-date-input.component';
import { DxcDateInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [FormattedDateInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcDateInputModule
  ],
  exports: [FormattedDateInputComponent]
})
export class FormattedDateInputModule { }
