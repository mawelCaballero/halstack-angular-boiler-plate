import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTableComponent } from './simple-table.component';
import { DxcTableModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [SimpleTableComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTableModule
  ], exports: [SimpleTableComponent]
})
export class SimpleTableModule { }
