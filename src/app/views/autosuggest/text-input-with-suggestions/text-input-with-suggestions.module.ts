import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputWithSuggestionsComponent } from './text-input-with-suggestions.component';
import { DxcTextInputModule, ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [TextInputWithSuggestionsComponent],
  imports: [
    BrowserModule,
    CommonModule,
    DxcTextInputModule,
    ThemeModule
  ],
  exports: [TextInputWithSuggestionsComponent],
  providers: [ { provide: 'ThemeService', useClass: ThemeService }],
  bootstrap: [TextInputWithSuggestionsComponent]


})
export class TextInputWithSuggestionsModule { }
