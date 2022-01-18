import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V3MultipleSelectComponent } from './v3-multiple-select.component';
import { ThemeModule, V3DxcSelectModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [V3MultipleSelectComponent],
  imports: [
    CommonModule,
    ThemeModule,
    V3DxcSelectModule
  ], exports: [V3MultipleSelectComponent]
})
export class V3MultipleSelectModule { }
