import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingsWithDifferentWeightsComponent } from './headings-with-different-weights.component';
import { DxcHeadingModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [HeadingsWithDifferentWeightsComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcHeadingModule
  ], exports: [HeadingsWithDifferentWeightsComponent]
})
export class HeadingsWithDifferentWeightsModule { }
