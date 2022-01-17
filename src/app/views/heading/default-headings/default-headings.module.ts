import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcHeadingModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { DefaultHeadingsComponent } from './default-headings.component';



@NgModule({
  declarations: [DefaultHeadingsComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcHeadingModule
  ],
   exports: [DefaultHeadingsComponent]
})
export class DefaultHeadingsModule { }
