import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderWithDropdownComponent } from './header-with-dropdown.component';
import { DxcDropdownModule, DxcHeaderModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [HeaderWithDropdownComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcHeaderModule,
    DxcDropdownModule
  ], exports: [HeaderWithDropdownComponent]
})
export class HeaderWithDropdownModule { }
