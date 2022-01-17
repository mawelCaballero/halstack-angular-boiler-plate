import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UncontrolledInputComponent } from './uncontrolled-input.component';
import { DxcTextInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [UncontrolledInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule
  ],exports: [UncontrolledInputComponent]
})
export class UncontrolledInputModule { }
