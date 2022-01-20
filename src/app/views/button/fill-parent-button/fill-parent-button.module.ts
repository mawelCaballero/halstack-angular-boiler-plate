import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillParentButtonComponent } from './fill-parent-button.component';
import {
  DxcButtonModule,
  ThemeService,
} from '@dxc-technology/halstack-angular';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FillParentButtonComponent,
  },
];

@NgModule({
  declarations: [FillParentButtonComponent],
  imports: [CommonModule, DxcButtonModule, RouterModule.forChild(routes)],
  providers: [{ provide: 'ThemeService', useClass: ThemeService }],
  bootstrap: [FillParentButtonComponent],
})
export class FillParentButtonModule {}
