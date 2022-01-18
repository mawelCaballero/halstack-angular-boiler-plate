import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcWizardModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { UncontrolledWizardComponent } from './uncontrolled-wizard.component';



@NgModule({
  declarations: [UncontrolledWizardComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcWizardModule
  ], exports: [UncontrolledWizardComponent]
})
export class UncontrolledWizardModule { }
