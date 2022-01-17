import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UndeterminateDefaultProgressBarComponent } from './undeterminate-default-progress-bar.component';
import { DxcProgressbarModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [UndeterminateDefaultProgressBarComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcProgressbarModule
  ], exports: [UndeterminateDefaultProgressBarComponent]
})
export class UndeterminateDefaultProgressBarModule { }
