import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcButtonModule, DxcDialogModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { ModalDialogComponent } from './modal-dialog.component';

@NgModule({
  declarations: [ModalDialogComponent],
  imports: [
    CommonModule,
    DxcButtonModule,
    DxcDialogModule,
    ThemeModule
  ], exports: [ModalDialogComponent]
})
export class ModalDialogModule { }
