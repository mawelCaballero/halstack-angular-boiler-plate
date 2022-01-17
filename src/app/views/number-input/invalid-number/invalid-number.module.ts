import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvalidNumberComponent } from './invalid-number.component';
import { DxcNumberInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [InvalidNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule
  ],exports: [InvalidNumberComponent]
})
export class InvalidNumberModule { }
