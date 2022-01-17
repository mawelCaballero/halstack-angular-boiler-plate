import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledPasswordComponent } from './controlled-password.component';
import { DxcPasswordInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [ControlledPasswordComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcPasswordInputModule
  ],exports: [ControlledPasswordComponent]
})
export class ControlledPasswordModule { }
