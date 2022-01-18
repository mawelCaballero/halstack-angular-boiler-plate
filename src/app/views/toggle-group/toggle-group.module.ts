import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicToggleGroupModule } from './basic-toggle-group/basic-toggle-group.module';
import { ControlledToggleGroupModule } from './controlled-toggle-group/controlled-toggle-group.module';
import { DisabledToggleGroupModule } from './disabled-toggle-group/disabled-toggle-group.module';
import { MultipleToggleGroupModule } from './multiple-toggle-group/multiple-toggle-group.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BasicToggleGroupModule,
    ControlledToggleGroupModule,
    DisabledToggleGroupModule,
    MultipleToggleGroupModule
  ]
})
export class ToggleGroupModule { }
