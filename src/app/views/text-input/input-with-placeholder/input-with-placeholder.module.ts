import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithPlaceholderComponent } from './input-with-placeholder.component';
import { DxcTextInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [InputWithPlaceholderComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule
  ], exports: [InputWithPlaceholderComponent]
})
export class InputWithPlaceholderModule { }
