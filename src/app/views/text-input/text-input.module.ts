import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledInputModule } from './controlled-input/controlled-input.module';
import { UncontrolledInputModule } from './uncontrolled-input/uncontrolled-input.module';
import { InputWithHelperTextModule } from './input-with-helper-text/input-with-helper-text.module';
import { InputWithPlaceholderModule } from './input-with-placeholder/input-with-placeholder.module';
import { InputWithPrefixModule } from './input-with-prefix/input-with-prefix.module';
import { InputWithSuffixModule } from './input-with-suffix/input-with-suffix.module';
import { InputWithActionModule } from './input-with-action/input-with-action.module';
import { OptionalInputModule } from './optional-input/optional-input.module';
import { DisabledInputModule } from './disabled-input/disabled-input.module';
import { InputWithPatternConstraintModule } from './input-with-pattern-constraint/input-with-pattern-constraint.module';
import { InputWithLengthConstraintModule } from './input-with-length-constraint/input-with-length-constraint.module';
import { InvalidInputModule } from './invalid-input/invalid-input.module';
import { InputWithCustomErrorModule } from './input-with-custom-error/input-with-custom-error.module';
import { FillParentSizeInputModule } from './fill-parent-size-input/fill-parent-size-input.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ControlledInputModule,
    UncontrolledInputModule,
    InputWithHelperTextModule,
    InputWithPlaceholderModule,
    InputWithPrefixModule, InputWithSuffixModule,
    InputWithActionModule, OptionalInputModule,
    DisabledInputModule,
    InputWithPatternConstraintModule,
    InputWithLengthConstraintModule,
    InvalidInputModule,
    InputWithCustomErrorModule,
    FillParentSizeInputModule
  ]
})
export class TextInputModule { }
