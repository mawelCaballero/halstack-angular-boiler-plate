import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizedInputTextComponent } from './sized-input-text.component';
import { DxcInputTextModule, ThemeModule } from '@dxc-technology/halstack-angular';


@NgModule({
  declarations: [SizedInputTextComponent],
  imports: [
    CommonModule,
    DxcInputTextModule,
    ThemeModule
  ], exports: [SizedInputTextComponent]
})
export class SizedInputTextModule { }
