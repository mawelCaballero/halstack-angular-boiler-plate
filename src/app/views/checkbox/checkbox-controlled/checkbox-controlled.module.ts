import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxControlledComponent } from './checkbox-controlled.component';
import { DxcCheckboxModule, ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [CheckboxControlledComponent],
  imports: [
    CommonModule,
    DxcCheckboxModule,
    ThemeModule
  ],exports: [CheckboxControlledComponent],
  providers: [ { provide: 'ThemeService', useClass: ThemeService }],
  bootstrap: [CheckboxControlledComponent] //
})
export class CheckboxControlledModule { }
