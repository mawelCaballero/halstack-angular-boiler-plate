import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLinkComponent } from './default-link/default-link.component';
import { UndecoratedLinkWithNewWindowComponent } from './undecorated-link-with-new-window/undecorated-link-with-new-window.component';
import { DisabledLinkComponent } from './disabled-link/disabled-link.component';
import { LinkWithIconComponent } from './link-with-icon/link-with-icon.component';
import { LinkWithActionComponent } from './link-with-action/link-with-action.component';
import { DefaultLinkModule } from './default-link/default-link.module';
import { LinkWithActionModule } from './link-with-action/link-with-action.module';
import { LinkWithIconModule } from './link-with-icon/link-with-icon.module';
import { UndecoratedLinkWithNewWindowModule } from './undecorated-link-with-new-window/undecorated-link-with-new-window.module';
import { DisabledLinkModule } from './disabled-link/disabled-link.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DefaultLinkModule,
    LinkWithActionModule,
    LinkWithIconModule,
    UndecoratedLinkWithNewWindowModule,
    DisabledLinkModule
  ]
})
export class LinkModule { }
