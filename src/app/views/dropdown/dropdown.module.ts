import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultDropdownModule } from './default-dropdown/default-dropdown.module';
import { DropdownWithIconsModule } from './dropdown-with-icons/dropdown-with-icons.module';
import { DefaultDropdownExpandOnHoverModule } from './default-dropdown-expand-on-hover/default-dropdown-expand-on-hover.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DefaultDropdownModule,
    DropdownWithIconsModule,
    DefaultDropdownExpandOnHoverModule
  ]
})
export class DropdownModule { }
