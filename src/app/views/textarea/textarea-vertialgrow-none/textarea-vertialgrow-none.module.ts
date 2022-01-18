import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaVertialgrowNoneComponent } from './textarea-vertialgrow-none.component';
import { DxcTextareaModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [TextareaVertialgrowNoneComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextareaModule
  ],exports: [TextareaVertialgrowNoneComponent]
})
export class TextareaVertialgrowNoneModule { }
