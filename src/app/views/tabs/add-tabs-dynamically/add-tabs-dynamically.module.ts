import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTabsDynamicallyComponent } from './add-tabs-dynamically.component';
import { DxcButtonModule, DxcTabsModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [AddTabsDynamicallyComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTabsModule,
    DxcButtonModule
  ],exports: [AddTabsDynamicallyComponent]
})
export class AddTabsDynamicallyModule { }
