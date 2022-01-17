import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioUncontrolledComponent } from './radio-uncontrolled.component';
import { DxcRadioModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [RadioUncontrolledComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcRadioModule

  ],exports: [RadioUncontrolledComponent]
})
export class RadioUncontrolledModule { }
