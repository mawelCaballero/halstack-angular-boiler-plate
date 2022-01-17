import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputFunctionSuggestionsComponent } from './text-input-function-suggestions.component';
import { BrowserModule } from '@angular/platform-browser';
import { DxcTextInputModule, ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [TextInputFunctionSuggestionsComponent],
  imports: [
    BrowserModule,
    CommonModule,
    DxcTextInputModule,
    ThemeModule
  ],
  exports: [TextInputFunctionSuggestionsComponent],
  providers: [ { provide: 'ThemeService', useClass: ThemeService }],
  bootstrap: [TextInputFunctionSuggestionsComponent]
})
export class TextInputFunctionSuggestionsModule { }
