import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule, V3DxcTextareaModule } from '@dxc-technology/halstack-angular';
import { V3FillParentTextareaComponent } from './v3-fill-parent-textarea.component';



@NgModule({
  declarations: [V3FillParentTextareaComponent],
  imports: [
    CommonModule,
    ThemeModule,
    V3DxcTextareaModule
  ], exports: [V3FillParentTextareaComponent]
})
export class V3FillParentTextareaModule { }
