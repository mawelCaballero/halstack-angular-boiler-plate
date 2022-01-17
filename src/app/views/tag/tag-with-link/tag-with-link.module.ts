import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagWithLinkComponent } from './tag-with-link.component';
import { DxcTagModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [TagWithLinkComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTagModule
  ],
  exports: [TagWithLinkComponent]
})
export class TagWithLinkModule { }
