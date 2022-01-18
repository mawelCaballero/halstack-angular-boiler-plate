import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V3ControlledTextareaModule } from './v3-controlled-textarea/v3-controlled-textarea.module';
import { V3UncontrolledTextareaModule } from './v3-uncontrolled-textarea/v3-uncontrolled-textarea.module';
import { V3DisabledTextareaModule } from './v3-disabled-textarea/v3-disabled-textarea.module';
import { V3InvalidTextareaModule } from './v3-invalid-textarea/v3-invalid-textarea.module';
import { V3RequiredTextareaModule } from './v3-required-textarea/v3-required-textarea.module';
import { V3FillParentTextareaModule } from './v3-fill-parent-textarea/v3-fill-parent-textarea.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    V3ControlledTextareaModule,
    V3UncontrolledTextareaModule,
    V3DisabledTextareaModule,
    V3InvalidTextareaModule,
    V3RequiredTextareaModule,
    V3FillParentTextareaModule
  ]
})
export class V3TextareaModule { }
