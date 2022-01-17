import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledWizardComponent } from './controlled-wizard/controlled-wizard.component';
import { UncontrolledWizardComponent } from './uncontrolled-wizard/uncontrolled-wizard.component';
import { VerticalWizardComponent } from './vertical-wizard/vertical-wizard.component';



@NgModule({
  declarations: [ControlledWizardComponent, UncontrolledWizardComponent, VerticalWizardComponent],
  imports: [
    CommonModule
  ]
})
export class WizardModule { }
