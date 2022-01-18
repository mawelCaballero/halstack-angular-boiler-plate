import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule, V3DxcTextareaModule } from '@dxc-technology/halstack-angular';
import { V3UncontrolledTextareaComponent } from './v3-uncontrolled-textarea.component';



@NgModule({
  declarations: [V3UncontrolledTextareaComponent],
  imports: [
    CommonModule,
    ThemeModule,
    V3DxcTextareaModule
  ], exports: [V3UncontrolledTextareaComponent]
})
export class V3UncontrolledTextareaModule { }
