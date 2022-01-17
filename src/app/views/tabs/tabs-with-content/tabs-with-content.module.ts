import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsWithContentComponent } from './tabs-with-content.component';
import { DxcTabsModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [TabsWithContentComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTabsModule
  ], exports: [TabsWithContentComponent]
})
export class TabsWithContentModule { }
