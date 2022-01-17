import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTagComponent } from './basic-tag.component';
import { DxcTagModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [BasicTagComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTagModule
  ],exports: [BasicTagComponent]
})
export class BasicTagModule { }
