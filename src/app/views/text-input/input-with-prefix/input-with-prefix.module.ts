import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithPrefixComponent } from './input-with-prefix.component';
import { DxcTextInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [InputWithPrefixComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule
  ], exports: [InputWithPrefixComponent]
})
export class InputWithPrefixModule { }
