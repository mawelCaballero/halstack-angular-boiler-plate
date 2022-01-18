import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultUploadComponent } from './default-upload/default-upload.component';
import { DefaultUploadModule } from './default-upload/default-upload.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DefaultUploadModule
  ]
})
export class UplodadModule { }
