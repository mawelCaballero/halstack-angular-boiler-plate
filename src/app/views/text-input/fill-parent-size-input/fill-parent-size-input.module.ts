import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillParentSizeInputComponent } from './fill-parent-size-input.component';
import { DxcTextInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [FillParentSizeInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule
  ],exports: [FillParentSizeInputComponent]
})
export class FillParentSizeInputModule { }
