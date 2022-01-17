import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcProgressbarModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { DeterminateDefaultProgressBarComponent } from './determinate-default-progress-bar.component';



@NgModule({
  declarations: [DeterminateDefaultProgressBarComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcProgressbarModule
  ], exports: [DeterminateDefaultProgressBarComponent]
})
export class DeterminateDefaultProgressBarModule { }
