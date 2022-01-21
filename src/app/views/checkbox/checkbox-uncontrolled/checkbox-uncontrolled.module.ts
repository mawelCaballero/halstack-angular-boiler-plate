import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcCheckboxModule, ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';
import { CheckboxUncontrolledComponent } from './checkbox-uncontrolled.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CheckboxUncontrolledComponent,
  },
];

@NgModule({
  declarations: [CheckboxUncontrolledComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ThemeModule,
    DxcCheckboxModule,
    RouterModule.forChild(routes)
  ],exports: [CheckboxUncontrolledComponent],
  providers: [ { provide: 'ThemeService', useClass: ThemeService }]
})
export class CheckboxUncontrolledModule { }
