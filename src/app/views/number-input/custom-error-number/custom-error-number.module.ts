import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcNumberInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { CustomErrorNumberComponent } from './custom-error-number.component';



@NgModule({
  declarations: [CustomErrorNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule
  ], exports: [CustomErrorNumberComponent]
})
export class CustomErrorNumberModule { }
