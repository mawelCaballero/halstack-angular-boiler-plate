import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavWithChildrenComponent } from './sidenav-with-children.component';
import { ThemeModule, DxcSideNavModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [SidenavWithChildrenComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSideNavModule
  ], exports: [SidenavWithChildrenComponent]
})
export class SidenavWithChildrenModule { }
