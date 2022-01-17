import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagWithIconComponent } from './tag-with-icon.component';
import { DxcTagModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [TagWithIconComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTagModule
  ], exports: [TagWithIconComponent]
})
export class TagWithIconModule { }
