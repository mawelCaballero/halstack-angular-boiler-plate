import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithCustomErrorComponent } from './input-with-custom-error.component';
import { DxcTextInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [InputWithCustomErrorComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule
  ], exports: [InputWithCustomErrorComponent]
})
export class InputWithCustomErrorModule { }
