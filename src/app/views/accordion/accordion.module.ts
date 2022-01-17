import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultAccordionComponent } from './default-accordion/default-accordion.component';
import { ControlledAccordionComponent } from './controlled-accordion/controlled-accordion.component';
import { AccordionWithAssistiveTextComponent } from './accordion-with-assistive-text/accordion-with-assistive-text.component';
import { AccordionWithIconComponent } from './accordion-with-icon/accordion-with-icon.component';
import { DisabledIconComponent } from './disabled-icon/disabled-icon.component';



@NgModule({
  declarations: [DefaultAccordionComponent, ControlledAccordionComponent, AccordionWithAssistiveTextComponent, AccordionWithIconComponent, DisabledIconComponent],
  imports: [
    CommonModule
  ]
})
export class AccordionModule { }
