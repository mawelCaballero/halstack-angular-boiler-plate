import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultDropdownComponent } from './default-dropdown.component';
import { DxcDropdownModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [DefaultDropdownComponent],
  imports: [
    CommonModule,
    DxcDropdownModule,
    ThemeModule
  ], exports: [DefaultDropdownComponent]
})
export class DefaultDropdownModule { }
