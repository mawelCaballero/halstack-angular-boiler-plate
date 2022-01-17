import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillParentSizeNumberComponent } from './fill-parent-size-number.component';
import { DxcNumberInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [FillParentSizeNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule
  ],exports: [FillParentSizeNumberComponent]
})
export class FillParentSizeNumberModule { }
