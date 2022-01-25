import { NgModule } from '@angular/core';
import { ProgressBarWithOverlayComponent } from './progress-bar-with-overlay.component';
import {
  DxcButtonModule,
  DxcProgressbarModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProgressBarWithOverlayComponent],
  imports: [
    ThemeModule,
    DxcProgressbarModule,
    DxcButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProgressBarWithOverlayComponent,
      },
    ]),
  ],
})
export class ProgressBarWithOverlayModule {}
