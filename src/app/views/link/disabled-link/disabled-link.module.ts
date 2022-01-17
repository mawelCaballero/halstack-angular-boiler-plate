import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisabledLinkComponent } from './disabled-link.component';
import { DxcLinkModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [DisabledLinkComponent],
  imports: [
    CommonModule,
    DxcLinkModule,
    ThemeModule
  ], exports: [DisabledLinkComponent]
})
export class DisabledLinkModule { }
