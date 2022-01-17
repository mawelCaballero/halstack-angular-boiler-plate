import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxcButtonModule, ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';
import { CommonModule } from '@angular/common';
import { SizedButtonComponent } from './sized-button.component';

@NgModule({
  declarations: [
    SizedButtonComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    DxcButtonModule,
    ThemeModule
  ],
  exports: [SizedButtonComponent],
  providers: [ { provide: 'ThemeService', useClass: ThemeService }],
  bootstrap: [SizedButtonComponent] //
})
export class SizedButtonModule { }

