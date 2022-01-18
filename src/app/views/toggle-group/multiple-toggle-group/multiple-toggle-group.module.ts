import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleToggleGroupComponent } from './multiple-toggle-group.component';
import { DxcToggleGroupModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [MultipleToggleGroupComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcToggleGroupModule
  ], exports: [MultipleToggleGroupComponent]

})
export class MultipleToggleGroupModule { }
