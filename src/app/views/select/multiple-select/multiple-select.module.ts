import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcSelectModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { MultipleSelectComponent } from './multiple-select.component';

@NgModule({
  declarations: [MultipleSelectComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSelectModule
  ], exports: [MultipleSelectComponent]
})
export class MultipleSelectModule { }
