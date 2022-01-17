import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcCheckboxModule, ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';
import { CheckboxLabelPositionComponent } from './checkbox-label-position.component';



@NgModule({
  declarations: [CheckboxLabelPositionComponent],
  imports: [
    CommonModule,
    DxcCheckboxModule,
    ThemeModule
  ],
  exports: [CheckboxLabelPositionComponent],
  providers: [ { provide: 'ThemeService', useClass: ThemeService }],
  bootstrap: [CheckboxLabelPositionComponent] //
})
export class CheckboxLabelPositionModule { }
