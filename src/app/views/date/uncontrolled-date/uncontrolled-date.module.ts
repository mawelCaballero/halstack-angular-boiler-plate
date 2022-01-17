import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DxcDateModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { UncontrolledDateComponent } from './uncontrolled-date.component';

@NgModule({
  declarations: [UncontrolledDateComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DxcDateModule,
    ThemeModule
  ],
  exports: [UncontrolledDateComponent]

})
export class UncontrolledDateModule { }
