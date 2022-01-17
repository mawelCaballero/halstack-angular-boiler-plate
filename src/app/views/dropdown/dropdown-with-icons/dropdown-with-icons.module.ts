import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownWithIconsComponent } from './dropdown-with-icons.component';
import { DxcDropdownModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [DropdownWithIconsComponent],
  imports: [
    CommonModule,
    DxcDropdownModule,
    ThemeModule
  ], exports: [DropdownWithIconsComponent]
})
export class DropdownWithIconsModule { }
