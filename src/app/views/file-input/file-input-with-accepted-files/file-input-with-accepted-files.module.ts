import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileInputWithAcceptedFilesComponent } from './file-input-with-accepted-files.component';
import { DxcFileInputModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [FileInputWithAcceptedFilesComponent],
  imports: [
    CommonModule,
    DxcFileInputModule,
    ThemeModule
  ],
  exports: [FileInputWithAcceptedFilesComponent]
})
export class FileInputWithAcceptedFilesModule { }
