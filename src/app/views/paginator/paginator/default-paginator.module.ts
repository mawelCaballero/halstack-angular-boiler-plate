import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './paginator.component';
import { DxcPaginatorModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [PaginatorComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcPaginatorModule
  ],exports: [PaginatorComponent]
})
export class DefaultPaginatorModule { }
