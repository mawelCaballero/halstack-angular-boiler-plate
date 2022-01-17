import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioLabelPositionComponent } from './radio-label-position.component';
import { DxcRadioModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [RadioLabelPositionComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcRadioModule
  ], exports: [RadioLabelPositionComponent]
})
export class RadioLabelPositionModule { }
