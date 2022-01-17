import { NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcNumberInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { OptionalNumberComponent } from './optional-number.component';

@NgModule({
  declarations: [OptionalNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule
  ],exports: [OptionalNumberComponent]
})
export class OptionalNumberModule { }
