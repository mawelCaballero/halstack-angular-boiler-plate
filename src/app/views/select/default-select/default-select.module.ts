import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultSelectComponent } from './default-select.component';
import { DxcSelectModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [DefaultSelectComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSelectModule
  ], exports: [DefaultSelectComponent]
})
export class DefaultSelectModule { }
