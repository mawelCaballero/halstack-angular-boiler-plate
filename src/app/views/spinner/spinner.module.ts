import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UndeterminedSpinnerComponent } from './undetermined-spinner/undetermined-spinner.component';
import { DeterminedSpinnerComponent } from './determined-spinner/determined-spinner.component';
import { SmallSpinnerComponent } from './small-spinner/small-spinner.component';
import { SpinnerWithOverlayComponent } from './spinner-with-overlay/spinner-with-overlay.component';
import { SmallSpinnerModule } from './small-spinner/small-spinner.module';
import { DeterminedSpinnerModule } from './determined-spinner/determined-spinner.module';
import { SpinnerWithOverlayModule } from './spinner-with-overlay/spinner-with-overlay.module';
import { UndeterminedSpinnerModule } from './undetermined-spinner/undetermined-spinner.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DeterminedSpinnerModule,
    UndeterminedSpinnerModule,
    SmallSpinnerModule,
    SpinnerWithOverlayModule
  ]
})
export class SpinnerModule { }
