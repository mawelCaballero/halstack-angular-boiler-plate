import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultDropdownExpandOnHoverComponent } from './default-dropdown-expand-on-hover.component';
import { DxcDropdownModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [DefaultDropdownExpandOnHoverComponent],
  imports: [
    CommonModule,
    DxcDropdownModule,
    ThemeModule
  ], exports:[DefaultDropdownExpandOnHoverComponent]
})
export class DefaultDropdownExpandOnHoverModule { }
