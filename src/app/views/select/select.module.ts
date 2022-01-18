import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultSelectComponent } from './default-select/default-select.component';
import { SearchableSelectComponent } from './searchable-select/searchable-select.component';
import { MultipleSelectComponent } from './multiple-select/multiple-select.component';
import { ErrorSelectComponent } from './error-select/error-select.component';
import { ErrorMultipleSelectComponent } from './error-multiple-select/error-multiple-select.component';
import { DisabledSelectComponent } from './disabled-select/disabled-select.component';
import { DefaultSelectModule } from './default-select/default-select.module';
import { DisabledSelectModule } from './disabled-select/disabled-select.module';
import { ErrorMultipleSelectModule } from './error-multiple-select/error-multiple-select.module';
import { ErrorSelectModule } from './error-select/error-select.module';
import { MultipleSelectModule } from './multiple-select/multiple-select.module';
import { SearchableSelectModule } from './searchable-select/searchable-select.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DefaultSelectModule,
    DisabledSelectModule,
    ErrorMultipleSelectModule,
    ErrorSelectModule,
    MultipleSelectModule,
    SearchableSelectModule
  ]
})
export class SelectModule { }
