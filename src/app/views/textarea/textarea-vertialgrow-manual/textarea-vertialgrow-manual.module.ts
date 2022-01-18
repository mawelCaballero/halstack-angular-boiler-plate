import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextareaVertialgrowManualComponent } from './textarea-vertialgrow-manual.component';
import { DxcTextareaModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [TextareaVertialgrowManualComponent],
  imports: [
    CommonModule,ThemeModule,DxcTextareaModule
  ], exports: [TextareaVertialgrowManualComponent]
})
export class TextareaVertialgrowManualModule { }
