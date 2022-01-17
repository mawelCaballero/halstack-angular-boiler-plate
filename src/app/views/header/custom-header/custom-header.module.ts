import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderComponent } from './custom-header.component';
import { DxcButtonModule, DxcHeaderModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [CustomHeaderComponent],
  imports: [
    CommonModule,
    DxcHeaderModule,
    DxcButtonModule,
    ThemeModule
  ], exports: [CustomHeaderComponent]
})
export class CustomHeaderModule { }
