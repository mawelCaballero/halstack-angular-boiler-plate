import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputWithSuggestionsComponent } from './text-input-with-suggestions.component';
import { DxcTextInputModule, ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TextInputWithSuggestionsComponent,
  },
];


@NgModule({
  declarations: [TextInputWithSuggestionsComponent],
  imports: [
    BrowserModule,
    CommonModule,
    DxcTextInputModule,
    ThemeModule,
    RouterModule.forChild(routes)
  ],
  exports: [TextInputWithSuggestionsComponent],
  providers: [ { provide: 'ThemeService', useClass: ThemeService }]
})
export class TextInputWithSuggestionsModule { }
