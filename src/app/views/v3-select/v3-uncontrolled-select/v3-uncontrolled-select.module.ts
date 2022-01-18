import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V3UncontrolledSelectComponent } from './v3-uncontrolled-select.component';
import { ThemeModule, V3DxcSelectModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [V3UncontrolledSelectComponent],
  imports: [
    CommonModule,
    ThemeModule,
    V3DxcSelectModule
  ], exports: [V3UncontrolledSelectComponent]
})
export class V3UncontrolledSelectModule { }
