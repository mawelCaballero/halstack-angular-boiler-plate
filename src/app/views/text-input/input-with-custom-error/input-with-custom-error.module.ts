import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputWithCustomErrorComponent } from './input-with-custom-error.component';
import {
  DxcTextInputModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InputWithCustomErrorComponent],
  imports: [
    CommonModule,
    ThemeModule,
    DxcTextInputModule,
    RouterModule.forChild([
      {
        path: '',
        component: InputWithCustomErrorComponent,
      },
    ]),
  ],
})
export class InputWithCustomErrorModule {}
