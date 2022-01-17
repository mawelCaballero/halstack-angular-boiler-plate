import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomErrorPasswordComponent } from './custom-error-password.component';
import { DxcPasswordInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [CustomErrorPasswordComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcPasswordInputModule
  ], exports: [CustomErrorPasswordComponent]
})
export class CustomErrorPasswordModule { }
