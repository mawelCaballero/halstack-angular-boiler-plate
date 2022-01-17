import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeterminedSpinnerComponent } from './determined-spinner.component';
import { DxcSpinnerModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [DeterminedSpinnerComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSpinnerModule
  ],exports: [DeterminedSpinnerComponent]
})
export class DeterminedSpinnerModule { }
