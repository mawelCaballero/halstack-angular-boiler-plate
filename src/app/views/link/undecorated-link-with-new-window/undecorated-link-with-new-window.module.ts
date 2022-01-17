import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UndecoratedLinkWithNewWindowComponent } from './undecorated-link-with-new-window.component';
import { DxcLinkModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [UndecoratedLinkWithNewWindowComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcLinkModule
  ], exports: [UndecoratedLinkWithNewWindowComponent]
})
export class UndecoratedLinkWithNewWindowModule { }
