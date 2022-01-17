import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizedTagComponent } from './sized-tag.component';
import { DxcTagModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [SizedTagComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTagModule
  ], exports: [SizedTagComponent]
})
export class SizedTagModule { }
