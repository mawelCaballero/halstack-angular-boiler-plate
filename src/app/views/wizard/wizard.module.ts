import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledWizardModule } from './controlled-wizard/controlled-wizard.module';
import { UncontrolledWizardModule } from './uncontrolled-wizard/uncontrolled-wizard.module';
import { VerticalWizardModule } from './vertical-wizard/vertical-wizard.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ControlledWizardModule,
    UncontrolledWizardModule,
    VerticalWizardModule
  ]
})
export class WizardModule { }
