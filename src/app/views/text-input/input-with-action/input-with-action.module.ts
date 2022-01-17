import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithActionComponent } from './input-with-action.component';
import { DxcTextInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [InputWithActionComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule
  ], exports: [InputWithActionComponent]
})
export class InputWithActionModule { }
