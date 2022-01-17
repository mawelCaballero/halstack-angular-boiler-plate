import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreffixSuffixInputTextComponent } from './preffix-suffix-input-text.component';
import { DxcInputTextModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [PreffixSuffixInputTextComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcInputTextModule
  ], exports: [PreffixSuffixInputTextComponent]
})
export class PreffixSuffixInputTextModule { }
