import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionalDateInputComponent } from './optional-date-input.component';
import { DxcDateInputModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [OptionalDateInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcDateInputModule
  ],
  exports: [OptionalDateInputComponent]
})
export class OptionalDateInputModule { }
