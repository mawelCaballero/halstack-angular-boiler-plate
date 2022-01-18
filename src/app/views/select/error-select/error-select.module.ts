import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorSelectComponent } from './error-select.component';
import { DxcSelectModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [ErrorSelectComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSelectModule
  ], exports: [ErrorSelectComponent]
})
export class ErrorSelectModule { }
