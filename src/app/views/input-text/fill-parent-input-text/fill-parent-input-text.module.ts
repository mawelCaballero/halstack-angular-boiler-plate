import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillParentInputTextComponent } from './fill-parent-input-text.component';
import { DxcInputTextModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [FillParentInputTextComponent],
  imports: [
    CommonModule,
    DxcInputTextModule,
    ThemeModule
  ],
  exports: [FillParentInputTextComponent]
})
export class FillParentInputTextModule { }
