import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputWithPreviewComponent } from './file-input-with-preview.component';
import { DxcFileInputModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [FileInputWithPreviewComponent],
  imports: [
    CommonModule,
    DxcFileInputModule,
    ThemeModule

  ],exports: [FileInputWithPreviewComponent]
})
export class FileInputWithPreviewModule { }
