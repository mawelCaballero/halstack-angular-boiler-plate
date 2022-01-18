import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcSelectModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { SearchableSelectComponent } from './searchable-select.component';



@NgModule({
  declarations: [SearchableSelectComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcSelectModule
  ], exports: [SearchableSelectComponent]
})
export class SearchableSelectModule { }
