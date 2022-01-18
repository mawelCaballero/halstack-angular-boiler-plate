import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultResultsetTableComponent } from './default-resultset-table.component';
import { ThemeModule, DxcResultsetTableModule, DxcButtonModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [DefaultResultsetTableComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcButtonModule,
    DxcResultsetTableModule
  ],exports: [DefaultResultsetTableComponent]
})
export class DefaultResultsetTableModule { }
