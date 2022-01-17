import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuffixNumberComponent } from './suffix-number.component';
import { DxcNumberInputModule, DxcTextInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [SuffixNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule,
    DxcTextInputModule
  ],exports: [SuffixNumberComponent]
})
export class SuffixNumberModule { }
