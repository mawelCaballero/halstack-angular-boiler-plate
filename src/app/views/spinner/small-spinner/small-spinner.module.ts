import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallSpinnerComponent } from './small-spinner.component';
import { DxcSpinnerModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [SmallSpinnerComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSpinnerModule
  ],exports: [SmallSpinnerComponent]
})
export class SmallSpinnerModule { }
