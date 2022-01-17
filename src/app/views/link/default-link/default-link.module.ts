import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLinkComponent } from './default-link.component';
import { DxcLinkModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [DefaultLinkComponent],
  imports: [
    CommonModule,
    DxcLinkModule,
    ThemeModule
  ],exports: [DefaultLinkComponent]
})
export class DefaultLinkModule { }
