import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V3SizedSelectComponent } from './v3-sized-select.component';
import { ThemeModule, V3DxcSelectModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [V3SizedSelectComponent],
  imports: [
    CommonModule,
    ThemeModule,
    V3DxcSelectModule
  ], exports: [V3SizedSelectComponent]
})
export class V3SizedSelectModule { }
