import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisabledNumberComponent } from './disabled-number.component';
import { DxcNumberInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [DisabledNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule
  ], exports: [DisabledNumberComponent]
})
export class DisabledNumberModule { }
