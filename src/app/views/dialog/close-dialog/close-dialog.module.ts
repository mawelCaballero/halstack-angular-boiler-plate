import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcButtonModule, DxcDialogModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { CloseDialogComponent } from './close-dialog.component';



@NgModule({
  declarations: [CloseDialogComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcDialogModule,
    DxcButtonModule
  ],
  exports: [CloseDialogComponent]
})
export class CloseDialogModule { }
