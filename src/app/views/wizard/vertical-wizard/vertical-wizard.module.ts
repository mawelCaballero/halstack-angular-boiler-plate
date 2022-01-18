import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcWizardModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { VerticalWizardComponent } from './vertical-wizard.component';

@NgModule({
  declarations: [VerticalWizardComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcWizardModule
  ], exports: [VerticalWizardComponent]
})
export class VerticalWizardModule { }
