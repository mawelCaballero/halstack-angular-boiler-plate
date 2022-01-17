import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvalidInputComponent } from './invalid-input.component';
import { DxcTextInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [InvalidInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule
  ], exports: [InvalidInputComponent]
})
export class InvalidInputModule { }
