import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputWithOneFileComponent } from './file-input-with-one-file.component';
import { DxcFileInputModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [FileInputWithOneFileComponent],
  imports: [
    CommonModule,
    DxcFileInputModule,
    ThemeModule

  ], exports: [FileInputWithOneFileComponent]
})
export class FileInputWithOneFileModule { }
