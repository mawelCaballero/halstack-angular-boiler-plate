import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UndeterminedSpinnerComponent } from './undetermined-spinner.component';
import { DxcSpinnerModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [UndeterminedSpinnerComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSpinnerModule
  ],exports: [UndeterminedSpinnerComponent]
})
export class UndeterminedSpinnerModule { }
