import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkWithActionComponent } from './link-with-action.component';
import { DxcLinkModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [LinkWithActionComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcLinkModule
  ],exports: [LinkWithActionComponent]
})
export class LinkWithActionModule { }
