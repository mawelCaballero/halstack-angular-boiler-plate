import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UncontrolledNumberComponent } from './uncontrolled-number.component';
import { DxcNumberInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [UncontrolledNumberComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcNumberInputModule
  ],exports: [UncontrolledNumberComponent]
})
export class UncontrolledNumberModule { }
