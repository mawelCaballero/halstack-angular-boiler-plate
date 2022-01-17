import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V3ControlledTextareaComponent } from './v3-controlled-textarea/v3-controlled-textarea.component';
import { V3UncontrolledTextareaComponent } from './v3-uncontrolled-textarea/v3-uncontrolled-textarea.component';
import { V3DisabledTextareaComponent } from './v3-disabled-textarea/v3-disabled-textarea.component';
import { V3InvalidTextareaComponent } from './v3-invalid-textarea/v3-invalid-textarea.component';
import { V3RequiredTextareaComponent } from './v3-required-textarea/v3-required-textarea.component';
import { V3FillParentTextareaComponent } from './v3-fill-parent-textarea/v3-fill-parent-textarea.component';



@NgModule({
  declarations: [V3ControlledTextareaComponent, V3UncontrolledTextareaComponent, V3DisabledTextareaComponent, V3InvalidTextareaComponent, V3RequiredTextareaComponent, V3FillParentTextareaComponent],
  imports: [
    CommonModule
  ]
})
export class V3TextareaModule { }
