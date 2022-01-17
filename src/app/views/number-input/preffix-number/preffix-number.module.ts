import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreffixNumberComponent } from './preffix-number.component';
import { DxcNumberInputModule, ThemeModule, DxcTextInputModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [PreffixNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule,
    DxcTextInputModule
  ], exports: [PreffixNumberComponent]
})
export class PreffixNumberModule { }
