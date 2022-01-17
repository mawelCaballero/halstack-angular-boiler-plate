import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcPasswordInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { UncontrolledPasswordComponent } from './uncontrolled-password.component';



@NgModule({
  declarations: [UncontrolledPasswordComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcPasswordInputModule
  ], exports: [UncontrolledPasswordComponent]
})
export class UncontrolledPasswordModule { }
