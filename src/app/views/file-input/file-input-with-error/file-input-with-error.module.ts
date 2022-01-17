import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputWithErrorComponent } from './file-input-with-error.component';
import { DxcFileInputModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [FileInputWithErrorComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcFileInputModule

  ], exports: [FileInputWithErrorComponent]
})
export class FileInputWithErrorModule { }
