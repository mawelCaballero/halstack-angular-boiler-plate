import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledInputTextComponent } from './controlled-input-text/controlled-input-text.component';
import { SizedInputTextComponent } from './sized-input-text/sized-input-text.component';
import { UncontrolledInputTextComponent } from './uncontrolled-input-text/uncontrolled-input-text.component';
import { PreffixSuffixInputTextComponent } from './preffix-suffix-input-text/preffix-suffix-input-text.component';
import { MaskedInputTextComponent } from './masked-input-text/masked-input-text.component';
import { FillParentInputTextComponent } from './fill-parent-input-text/fill-parent-input-text.component';
import { ControlledInputTextModule } from './controlled-input-text/controlled-input-text.module';
import { FillParentInputTextModule } from './fill-parent-input-text/fill-parent-input-text.module';
import { MaskedInputTextModule } from './masked-input-text/masked-input-text.module';
import { PreffixSuffixInputTextModule } from './preffix-suffix-input-text/preffix-suffix-input-text.module';
import { SizedInputTextModule } from './sized-input-text/sized-input-text.module';
import { UncontrolledInputTextModule } from './uncontrolled-input-text/uncontrolled-input-text.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ControlledInputTextModule,
    FillParentInputTextModule,
    MaskedInputTextModule,
    PreffixSuffixInputTextModule,
    SizedInputTextModule,
    UncontrolledInputTextModule
  ]
})
export class InputTextModule { }
