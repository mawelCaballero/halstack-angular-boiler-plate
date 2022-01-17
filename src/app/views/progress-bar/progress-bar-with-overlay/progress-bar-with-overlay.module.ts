import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarWithOverlayComponent } from './progress-bar-with-overlay.component';
import { DxcButtonModule, DxcProgressbarModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [ProgressBarWithOverlayComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcProgressbarModule,
    DxcButtonModule,
  ], exports: [ProgressBarWithOverlayComponent]
})
export class ProgressBarWithOverlayModule { }
