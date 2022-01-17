import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultResultsetTableComponent } from './default-resultset-table.component';
import { ThemeModule, DxcResultsetTableModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [DefaultResultsetTableComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcResultsetTableModule
  ],exports: [DefaultResultsetTableComponent]
})
export class DefaultResultsetTableModule { }
