import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomErrorPasswordComponent } from './custom-error-password.component';
import { DxcPasswordInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CustomErrorPasswordComponent],
  imports: [
    ThemeModule,
    DxcPasswordInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomErrorPasswordComponent,
      },
    ])
  ]
})
export class CustomErrorPasswordModule { }
