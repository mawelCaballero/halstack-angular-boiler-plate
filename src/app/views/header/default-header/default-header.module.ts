import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcHeaderModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { DefaultHeaderComponent } from './default-header.component';

@NgModule({
  declarations: [DefaultHeaderComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcHeaderModule,
  ],exports: [DefaultHeaderComponent]
})
export class DefaultHeaderModule { }
