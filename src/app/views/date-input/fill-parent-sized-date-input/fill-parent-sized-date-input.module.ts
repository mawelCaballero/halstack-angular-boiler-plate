import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillParentSizedDateInputComponent } from './fill-parent-sized-date-input.component';
import { DxcDateInputModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [FillParentSizedDateInputComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcDateInputModule
  ],
  exports: [FillParentSizedDateInputComponent]
})
export class FillParentSizedDateInputModule { }
