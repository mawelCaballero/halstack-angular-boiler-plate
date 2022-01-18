import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledWizardComponent } from './controlled-wizard.component';
import { DxcWizardModule, ThemeModule } from '@dxc-technology/halstack-angular';



@NgModule({
  declarations: [ControlledWizardComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcWizardModule
  ], exports: [ControlledWizardComponent]
})
export class ControlledWizardModule { }
