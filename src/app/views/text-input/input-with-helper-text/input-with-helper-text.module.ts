import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithHelperTextComponent } from './input-with-helper-text.component';
import { DxcTextInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [InputWithHelperTextComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule
  ],exports: [InputWithHelperTextComponent]
})
export class InputWithHelperTextModule { }
