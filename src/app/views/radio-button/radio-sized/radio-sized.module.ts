import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcRadioModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RadioSizedComponent } from './radio-sized.component';



@NgModule({
  declarations: [RadioSizedComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcRadioModule
  ],exports: [RadioSizedComponent]
})
export class RadioSizedModule { }
