import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V3ControlledTextareaComponent } from './v3-controlled-textarea.component';
import { ThemeModule, V3DxcTextareaModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [V3ControlledTextareaComponent],
  imports: [
    CommonModule,
    ThemeModule,
    V3DxcTextareaModule
  ], exports: [V3ControlledTextareaComponent]
})
export class V3ControlledTextareaModule { }
