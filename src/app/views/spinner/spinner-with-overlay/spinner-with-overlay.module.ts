import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerWithOverlayComponent } from './spinner-with-overlay.component';
import { DxcButtonModule, DxcSpinnerModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [SpinnerWithOverlayComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSpinnerModule,
    DxcButtonModule
  ], exports: [SpinnerWithOverlayComponent]
})
export class SpinnerWithOverlayModule { }
