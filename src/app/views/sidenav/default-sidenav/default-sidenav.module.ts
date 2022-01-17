import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultSidenavComponent } from './default-sidenav.component';
import { DxcSideNavModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [DefaultSidenavComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSideNavModule
  ], exports: [DefaultSidenavComponent]
})
export class DefaultSidenavModule { }
