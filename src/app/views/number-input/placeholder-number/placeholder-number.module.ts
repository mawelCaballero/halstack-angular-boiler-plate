import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderNumberComponent } from './placeholder-number.component';
import { DxcNumberInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [PlaceholderNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule
  ],exports: [PlaceholderNumberComponent]
})
export class PlaceholderNumberModule { }
