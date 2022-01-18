import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcSelectModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { ErrorMultipleSelectComponent } from './error-multiple-select.component';



@NgModule({
  declarations: [ErrorMultipleSelectComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSelectModule
  ], exports: [ErrorMultipleSelectComponent]
})
export class ErrorMultipleSelectModule { }
