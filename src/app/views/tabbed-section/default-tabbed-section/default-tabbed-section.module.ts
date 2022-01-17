import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultTabbedSectionComponent } from './default-tabbed-section.component';
import { DxcTabbedSectionModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [DefaultTabbedSectionComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTabbedSectionModule
  ],exports: [DefaultTabbedSectionComponent]
})
export class DefaultTabbedSectionModule { }
