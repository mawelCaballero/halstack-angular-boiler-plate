import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioControlledComponent } from './radio-controlled.component';
import { DxcRadioModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [RadioControlledComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcRadioModule
  ],
  exports: [RadioControlledComponent]
})
export class RadioControlledModule { }
