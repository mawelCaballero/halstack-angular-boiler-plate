import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAlertComponent } from './info-alert/info-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { ErrorAlertComponent } from './error-alert/error-alert.component';
import { SizedAlertComponent } from './sized-alert/sized-alert.component';
import { ModalAlertComponent } from './modal-alert/modal-alert.component';
import { ClosableInlineAlertComponent } from './closable-inline-alert/closable-inline-alert.component';
import { AlertWithChildrenComponent } from './alert-with-children/alert-with-children.component';



@NgModule({
  declarations: [InfoAlertComponent, SuccessAlertComponent, WarningAlertComponent, ErrorAlertComponent, SizedAlertComponent, ModalAlertComponent, ClosableInlineAlertComponent, AlertWithChildrenComponent],
  imports: [
    CommonModule
  ]
})
export class AlertModule { }
