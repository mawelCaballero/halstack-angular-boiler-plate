import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UncontrolledAccordionGroupComponent } from './uncontrolled-accordion-group/uncontrolled-accordion-group.component';
import { ControlledAccordionGroupComponent } from './controlled-accordion-group/controlled-accordion-group.component';
import { DisabledAccordionGroupComponent } from './disabled-accordion-group/disabled-accordion-group.component';



@NgModule({
  declarations: [UncontrolledAccordionGroupComponent, ControlledAccordionGroupComponent, DisabledAccordionGroupComponent],
  imports: [
    CommonModule
  ]
})
export class AccordionGroupModule { }
