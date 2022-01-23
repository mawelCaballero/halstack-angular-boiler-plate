import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LengthConstraintPasswordComponent } from './length-constraint-password.component';
import { DxcPasswordInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LengthConstraintPasswordComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcPasswordInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: LengthConstraintPasswordComponent,
      },
    ])
  ]
})
export class LengthConstraintPasswordModule { }
