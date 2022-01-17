import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultSidenavModule } from './default-sidenav/default-sidenav.module';
import { SidenavWithChildrenModule } from './sidenav-with-children/sidenav-with-children.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DefaultSidenavModule,
    SidenavWithChildrenModule
  ]
})
export class SidenavModule { }
