import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcPasswordInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { FillParentSizePasswordComponent } from './fill-parent-size-password.component';



@NgModule({
  declarations: [FillParentSizePasswordComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcPasswordInputModule
  ], exports: [FillParentSizePasswordComponent]
})
export class FillParentSizePasswordModule { }
