import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DxcButtonModule, ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonWithIconComponent } from './button-with-icon.component';

@NgModule({
  declarations: [
    ButtonWithIconComponent,
  ],
  imports: [
    CommonModule,
    DxcButtonModule,
    ThemeModule
  ],
  exports: [ButtonWithIconComponent],
  providers: [ { provide: 'ThemeService', useClass: ThemeService }],
  bootstrap: [ButtonWithIconComponent] //
})
export class ButtonWithIconModule { }
