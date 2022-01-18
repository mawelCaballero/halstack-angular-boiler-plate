import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionalTextareaComponent } from './optional-textarea.component';
import { DxcTextareaModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [OptionalTextareaComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule
  ], exports: [OptionalTextareaComponent]
})
export class OptionalTextareaModule { }
