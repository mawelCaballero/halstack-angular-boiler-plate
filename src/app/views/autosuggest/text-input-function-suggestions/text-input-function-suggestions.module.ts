import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputFunctionSuggestionsComponent } from './text-input-function-suggestions.component';
import { BrowserModule } from '@angular/platform-browser';
import { DxcTextInputModule, ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TextInputFunctionSuggestionsComponent,
  },
];

@NgModule({
  declarations: [TextInputFunctionSuggestionsComponent],
  imports: [
    BrowserModule,
    CommonModule,
    DxcTextInputModule,
    ThemeModule,
    RouterModule.forChild(routes)
  ],
  exports: [TextInputFunctionSuggestionsComponent],
  providers: [ { provide: 'ThemeService', useClass: ThemeService }]
})
export class TextInputFunctionSuggestionsModule { }
