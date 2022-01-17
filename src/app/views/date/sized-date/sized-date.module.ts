import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizedDateComponent } from './sized-date.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxcDateModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [SizedDateComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DxcDateModule,
    ThemeModule
  ],
  exports: [SizedDateComponent]
})
export class SizedDateModule { }
