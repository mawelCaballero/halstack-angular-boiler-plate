import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkWithIconComponent } from './link-with-icon.component';
import { DxcLinkModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [LinkWithIconComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcLinkModule
  ], exports: [LinkWithIconComponent]
})
export class LinkWithIconModule { }
