import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaskedInputTextComponent } from './masked-input-text.component';
import { DxcInputTextModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [MaskedInputTextComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcInputTextModule
  ], exports: [MaskedInputTextComponent]
})
export class MaskedInputTextModule { }
