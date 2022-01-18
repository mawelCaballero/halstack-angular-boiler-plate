import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V3DisabledTextareaComponent } from './v3-disabled-textarea.component';
import { ThemeModule, V3DxcTextareaModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [V3DisabledTextareaComponent],
  imports: [
    CommonModule,
    ThemeModule,
    V3DxcTextareaModule
  ], exports: [V3DisabledTextareaComponent]
})
export class V3DisabledTextareaModule { }
