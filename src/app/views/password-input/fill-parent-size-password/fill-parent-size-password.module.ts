import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcPasswordInputModule, ThemeModule } from '@dxc-technology/halstack-angular';
import { FillParentSizePasswordComponent } from './fill-parent-size-password.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FillParentSizePasswordComponent],
  imports: [
    ThemeModule,
    DxcPasswordInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: FillParentSizePasswordComponent,
      },
    ])
  ]
})
export class FillParentSizePasswordModule { }
