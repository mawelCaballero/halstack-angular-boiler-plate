import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DxcTextInputModule } from '@dxc-technology/halstack-angular';
import { TextInputFunctionSuggestionsModule } from './text-input-function-suggestions/text-input-function-suggestions.module';
import { TextInputWithSuggestionsModule } from './text-input-with-suggestions/text-input-with-suggestions.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DxcTextInputModule,
  ],
  exports: [
    TextInputWithSuggestionsModule,
    TextInputFunctionSuggestionsModule
  ]
})
export class AutosuggestModule { }
