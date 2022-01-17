import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultSelectComponent } from './default-select/default-select.component';
import { SearchableSelectComponent } from './searchable-select/searchable-select.component';
import { MultipleSelectComponent } from './multiple-select/multiple-select.component';
import { ErrorSelectComponent } from './error-select/error-select.component';
import { ErrorMultipleSelectComponent } from './error-multiple-select/error-multiple-select.component';
import { DisabledSelectComponent } from './disabled-select/disabled-select.component';



@NgModule({
  declarations: [DefaultSelectComponent, SearchableSelectComponent, MultipleSelectComponent, ErrorSelectComponent, ErrorMultipleSelectComponent, DisabledSelectComponent],
  imports: [
    CommonModule
  ]
})
export class SelectModule { }
