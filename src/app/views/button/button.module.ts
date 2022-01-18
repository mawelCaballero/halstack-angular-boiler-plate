import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxcButtonModule } from '@dxc-technology/halstack-angular';
import { ButtonWithIconModule } from './button-with-icon/button-with-icon.module';
import { SizedButtonModule } from './sized-button/sized-button.module';
import { FillParentButtonModule } from './fill-parent-button/fill-parent-button.module';
import { ButtonModesModule } from './button-modes/button-modes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonWithIconModule,
    SizedButtonModule,
    ButtonModesModule,
    FillParentButtonModule
  ]
})
export class ButtonModule { }
