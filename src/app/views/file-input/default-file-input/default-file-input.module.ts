import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultFileInputComponent } from './default-file-input.component';
import { DxcFileInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [DefaultFileInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcFileInputModule
  ],
  exports: [DefaultFileInputComponent]
})
export class DefaultFileInputModule { }
