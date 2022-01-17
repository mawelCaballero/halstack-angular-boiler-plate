import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledInputComponent } from './controlled-input.component';
import { DxcTextInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [ControlledInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule
  ], exports: [ControlledInputComponent]
})
export class ControlledInputModule { }
