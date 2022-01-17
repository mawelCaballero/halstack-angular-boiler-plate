import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseDialogModule } from './close-dialog/close-dialog.module';
import { ModalDialogModule } from './modal-dialog/modal-dialog.module';
import { DefaultDialogModule } from './default-dialog/default-dialog.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CloseDialogModule,
    DefaultDialogModule,
    ModalDialogModule
  ]
})
export class DialogModule { }
