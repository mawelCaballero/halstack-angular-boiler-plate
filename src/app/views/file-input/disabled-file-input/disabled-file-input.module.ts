import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisabledFileInputComponent } from './disabled-file-input.component';
import { DxcFileInputModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [DisabledFileInputComponent],
  imports: [
    CommonModule,
    DxcFileInputModule,
    ThemeModule
  ],exports: [DisabledFileInputComponent]
})
export class DisabledFileInputModule { }
