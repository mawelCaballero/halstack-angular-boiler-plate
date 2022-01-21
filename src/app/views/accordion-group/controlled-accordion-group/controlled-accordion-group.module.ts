import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledAccordionGroupComponent } from './controlled-accordion-group.component';
import { Routes, RouterModule } from '@angular/router';
import { DxcAccordionGroupModule, ThemeModule } from '@dxc-technology/halstack-angular';

const routes: Routes = [
  {
    path: '',
    component: ControlledAccordionGroupComponent,
  },
];

@NgModule({
  declarations: [ControlledAccordionGroupComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcAccordionGroupModule,
    RouterModule.forChild(routes)],
 exports: [ControlledAccordionGroupComponent]
})
export class ControlledAccordionGroupModule { }
