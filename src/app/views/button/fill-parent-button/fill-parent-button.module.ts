import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillParentButtonComponent } from './fill-parent-button.component';
import { DxcButtonModule, ThemeService } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [FillParentButtonComponent],
  imports: [
    CommonModule,
    DxcButtonModule
  ],providers: [ { provide: 'ThemeService', useClass: ThemeService }],
  bootstrap: [FillParentButtonComponent]
})
export class FillParentButtonModule { }
