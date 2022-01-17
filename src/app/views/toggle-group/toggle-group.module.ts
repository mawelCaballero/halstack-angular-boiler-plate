import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicToggleGroupComponent } from './basic-toggle-group/basic-toggle-group.component';
import { ControlledToggleGroupComponent } from './controlled-toggle-group/controlled-toggle-group.component';
import { DisabledToggleGroupComponent } from './disabled-toggle-group/disabled-toggle-group.component';
import { MultipleToggleGroupComponent } from './multiple-toggle-group/multiple-toggle-group.component';



@NgModule({
  declarations: [BasicToggleGroupComponent, ControlledToggleGroupComponent, DisabledToggleGroupComponent, MultipleToggleGroupComponent],
  imports: [
    CommonModule
  ]
})
export class ToggleGroupModule { }
