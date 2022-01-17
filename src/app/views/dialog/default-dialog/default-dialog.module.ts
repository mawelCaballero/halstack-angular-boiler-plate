import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcDialogModule, ThemeModule, DxcButtonModule } from '@dxc-technology/halstack-angular';
import { DefaultDialogComponent } from './default-dialog.component';



@NgModule({
  declarations: [DefaultDialogComponent],
  imports: [
    CommonModule,
    DxcDialogModule,
    DxcButtonModule,
    ThemeModule
  ],
  exports: [DefaultDialogComponent]
})
export class DefaultDialogModule { }
