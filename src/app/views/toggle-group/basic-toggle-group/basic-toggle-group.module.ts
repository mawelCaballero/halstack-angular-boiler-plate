import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicToggleGroupComponent } from './basic-toggle-group.component';
import { DxcToggleGroupModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [BasicToggleGroupComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcToggleGroupModule
  ], exports: [BasicToggleGroupComponent]
})
export class BasicToggleGroupModule { }
