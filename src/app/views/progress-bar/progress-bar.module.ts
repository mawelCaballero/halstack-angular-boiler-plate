import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeterminateDefaultProgressBarComponent } from './determinate-default-progress-bar/determinate-default-progress-bar.component';
import { UndeterminateDefaultProgressBarComponent } from './undeterminate-default-progress-bar/undeterminate-default-progress-bar.component';
import { ProgressBarWithOverlayComponent } from './progress-bar-with-overlay/progress-bar-with-overlay.component';
import { DeterminateDefaultProgressBarModule } from './determinate-default-progress-bar/determinate-default-progress-bar.module';
import { ProgressBarWithOverlayModule } from './progress-bar-with-overlay/progress-bar-with-overlay.module';
import { UndeterminateDefaultProgressBarModule } from './undeterminate-default-progress-bar/undeterminate-default-progress-bar.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DeterminateDefaultProgressBarModule,
    ProgressBarWithOverlayModule,
    UndeterminateDefaultProgressBarModule
  ]
})
export class ProgressBarModule { }
