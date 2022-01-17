import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultFileInputModule } from './default-file-input/default-file-input.module';
import { DisabledFileInputModule } from './disabled-file-input/disabled-file-input.module';
import { FileInputModesModule } from './file-input-modes/file-input-modes.module';
import { FileInputWithAcceptedFilesModule } from './file-input-with-accepted-files/file-input-with-accepted-files.module';
import { FileInputWithErrorModule } from './file-input-with-error/file-input-with-error.module';
import { FileInputWithOneFileModule } from './file-input-with-one-file/file-input-with-one-file.module';
import { FileInputWithPreviewModule } from './file-input-with-preview/file-input-with-preview.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DefaultFileInputModule,
    DisabledFileInputModule,
    FileInputModesModule,
    FileInputWithAcceptedFilesModule,
    FileInputWithErrorModule,
    FileInputWithOneFileModule,
    FileInputWithPreviewModule
  ]
})
export class FileInputModule { }
