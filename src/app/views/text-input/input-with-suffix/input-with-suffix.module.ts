import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithSuffixComponent } from './input-with-suffix.component';
import { DxcTextInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [InputWithSuffixComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule
  ],exports: [InputWithSuffixComponent]
})
export class InputWithSuffixModule { }
