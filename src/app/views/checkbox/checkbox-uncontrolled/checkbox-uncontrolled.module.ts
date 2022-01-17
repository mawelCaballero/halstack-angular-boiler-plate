import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcCheckboxModule, ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';
import { CheckboxUncontrolledComponent } from './checkbox-uncontrolled.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [CheckboxUncontrolledComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ThemeModule,
    DxcCheckboxModule
  ],exports: [CheckboxUncontrolledComponent],
  providers: [ { provide: 'ThemeService', useClass: ThemeService }],
  bootstrap: [CheckboxUncontrolledComponent]
})
export class CheckboxUncontrolledModule { }
