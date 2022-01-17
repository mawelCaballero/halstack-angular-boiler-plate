import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultFooterComponent } from './default-footer.component';
import { DxcFooterModule, ThemeModule } from '@dxc-technology/halstack-angular';


@NgModule({
  declarations: [DefaultFooterComponent],
  imports: [
    CommonModule,
    DxcFooterModule,
    ThemeModule

  ],
  exports: [DefaultFooterComponent]
})
export class DefaultFooterModule { }
