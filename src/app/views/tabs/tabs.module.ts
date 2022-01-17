import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledTabsComponent } from './controlled-tabs/controlled-tabs.component';
import { UncontrolledTabsComponent } from './uncontrolled-tabs/uncontrolled-tabs.component';
import { TabsWithContentComponent } from './tabs-with-content/tabs-with-content.component';
import { AddTabsDynamicallyComponent } from './add-tabs-dynamically/add-tabs-dynamically.component';
import { AddTabsDynamicallyModule } from './add-tabs-dynamically/add-tabs-dynamically.module';
import { ControlledTabsModule } from './controlled-tabs/controlled-tabs.module';
import { TabsWithContentModule } from './tabs-with-content/tabs-with-content.module';
import { UncontrolledTabsModule } from './uncontrolled-tabs/uncontrolled-tabs.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddTabsDynamicallyModule,
    ControlledTabsModule,
    TabsWithContentModule,
    UncontrolledTabsModule
  ]
})
export class TabsModule { }
