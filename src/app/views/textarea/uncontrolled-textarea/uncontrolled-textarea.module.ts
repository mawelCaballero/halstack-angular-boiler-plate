import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UncontrolledTextareaComponent } from './uncontrolled-textarea.component';
import { ThemeModule, DxcTextareaModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [UncontrolledTextareaComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule

  ], exports: [UncontrolledTextareaComponent]
})
export class UncontrolledTextareaModule { }
