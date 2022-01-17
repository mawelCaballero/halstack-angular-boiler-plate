import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisabledInputComponent } from './disabled-input.component';
import { DxcTextInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [DisabledInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule
  ], exports: [DisabledInputComponent]
})
export class DisabledInputModule { }
