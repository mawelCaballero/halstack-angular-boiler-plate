import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UncontrolledTabsComponent } from './uncontrolled-tabs.component';
import { DxcTabsModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [UncontrolledTabsComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTabsModule
  ], exports: [UncontrolledTabsComponent]
})
export class UncontrolledTabsModule { }
