import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioGroupComponent } from './radio-group.component';
import { DxcRadioModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [RadioGroupComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcRadioModule

  ],exports: [RadioGroupComponent]
})
export class RadioGroupModule { }
