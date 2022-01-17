import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UncontrolledInputTextComponent } from './uncontrolled-input-text.component';
import { DxcInputTextModule, ThemeModule } from '@dxc-technology/halstack-angular';

@NgModule({
  declarations: [UncontrolledInputTextComponent],
  imports: [
    CommonModule,
    DxcInputTextModule,
    ThemeModule

  ], exports: [UncontrolledInputTextComponent]
})
export class UncontrolledInputTextModule { }
