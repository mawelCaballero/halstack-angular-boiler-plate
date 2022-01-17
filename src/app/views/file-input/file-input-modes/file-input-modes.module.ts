import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcFileInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { FileInputModesComponent } from './file-input-modes.component';

@NgModule({
  declarations: [FileInputModesComponent],
  imports: [
    CommonModule,
    DxcFileInputModule,
    ThemeModule
  ], exports: [FileInputModesComponent]
})
export class FileInputModesModule { }
