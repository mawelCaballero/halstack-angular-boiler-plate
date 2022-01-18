import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcSelectModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { DisabledSelectComponent } from './disabled-select.component';



@NgModule({
  declarations: [DisabledSelectComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSelectModule
  ], exports: [DisabledSelectComponent]
})
export class DisabledSelectModule { }
