import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultUploadComponent } from './default-upload.component';
import { DxcUploadModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [DefaultUploadComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcUploadModule
  ], exports: [DefaultUploadComponent]
})
export class DefaultUploadModule { }
