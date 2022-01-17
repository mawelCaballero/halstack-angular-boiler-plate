import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxSizedComponent } from './checkbox-sized.component';
import { DxcCheckboxModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [CheckboxSizedComponent],
  imports: [
    CommonModule,
    DxcCheckboxModule,
    ThemeModule
  ],
  exports: [CheckboxSizedComponent],
  bootstrap: [CheckboxSizedComponent]
})
export class CheckboxSizedModule { }


