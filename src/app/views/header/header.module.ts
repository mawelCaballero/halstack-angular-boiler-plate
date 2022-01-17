import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultHeaderComponent } from './default-header/default-header.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { HeaderWithDropdownComponent } from './header-with-dropdown/header-with-dropdown.component';
import { HeaderWithDropdownModule } from './header-with-dropdown/header-with-dropdown.module';
import { DefaultHeaderModule } from './default-header/default-header.module';
import { CustomHeaderModule } from './custom-header/custom-header.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomHeaderModule,
    DefaultHeaderModule,
    HeaderWithDropdownModule
  ]
})
export class HeaderModule { }
