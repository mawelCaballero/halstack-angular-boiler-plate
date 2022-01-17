import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxcButtonModule, ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';
import { CommonModule } from '@angular/common';
import { ButtonWithIconComponent } from './button-with-icon.component';

@NgModule({
  declarations: [
    ButtonWithIconComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    DxcButtonModule,
    ThemeModule
  ],
  exports: [ButtonWithIconComponent],
  providers: [ { provide: 'ThemeService', useClass: ThemeService }],
  bootstrap: [ButtonWithIconComponent] //
})
export class ButtonWithIconModule { }
