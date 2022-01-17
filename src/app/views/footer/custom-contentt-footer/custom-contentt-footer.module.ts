import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomContenttFooterComponent } from './custom-contentt-footer.component';
import { DxcFooterModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [CustomContenttFooterComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcFooterModule
  ], exports: [CustomContenttFooterComponent]
})
export class CustomContenttFooterModule { }
