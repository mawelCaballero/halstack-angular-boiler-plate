import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionalInputComponent } from './optional-input.component';
import { DxcTextInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [OptionalInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule
  ], exports: [OptionalInputComponent]
})
export class OptionalInputModule { }
