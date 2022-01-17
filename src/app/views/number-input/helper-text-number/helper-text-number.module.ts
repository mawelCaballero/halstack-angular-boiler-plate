import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperTextNumberComponent } from './helper-text-number.component';
import { DxcNumberInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [HelperTextNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule
  ],exports: [HelperTextNumberComponent]
})
export class HelperTextNumberModule { }
