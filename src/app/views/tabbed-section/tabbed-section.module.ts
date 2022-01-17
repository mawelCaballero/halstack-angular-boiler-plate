import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultTabbedSectionComponent } from './default-tabbed-section/default-tabbed-section.component';
import { DefaultTabbedSectionModule } from './default-tabbed-section/default-tabbed-section.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DefaultTabbedSectionModule
  ]
})
export class TabbedSectionModule { }
