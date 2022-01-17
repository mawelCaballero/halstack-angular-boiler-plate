import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledInputTextComponent } from './controlled-input-text.component';
import { DxcInputTextModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [ControlledInputTextComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcInputTextModule],
    exports: [ControlledInputTextComponent]
})
export class ControlledInputTextModule { }
