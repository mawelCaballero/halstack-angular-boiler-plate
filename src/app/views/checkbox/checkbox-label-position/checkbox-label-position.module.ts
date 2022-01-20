import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcCheckboxModule, ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';
import { CheckboxLabelPositionComponent } from './checkbox-label-position.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CheckboxLabelPositionComponent,
  },
];

@NgModule({
  declarations: [CheckboxLabelPositionComponent],
  imports: [
    CommonModule,
    DxcCheckboxModule,
    ThemeModule,
    RouterModule.forChild(routes)
  ],
  exports: [CheckboxLabelPositionComponent],
  providers: [ { provide: 'ThemeService', useClass: ThemeService }],
  bootstrap: [CheckboxLabelPositionComponent] //
})
export class CheckboxLabelPositionModule { }
