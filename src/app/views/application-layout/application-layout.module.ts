import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { LayoutWithSidenavComponent } from './layout-with-sidenav/layout-with-sidenav.component';



@NgModule({
  declarations: [BasicLayoutComponent, LayoutWithSidenavComponent],
  imports: [
    CommonModule
  ]
})
export class ApplicationLayoutModule { }
