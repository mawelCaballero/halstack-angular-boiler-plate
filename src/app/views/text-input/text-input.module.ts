import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledInputComponent } from './controlled-input/controlled-input.component';
import { UncontrolledInputComponent } from './uncontrolled-input/uncontrolled-input.component';
import { InputWithHelperTextComponent } from './input-with-helper-text/input-with-helper-text.component';
import { InputWithPlaceholderComponent } from './input-with-placeholder/input-with-placeholder.component';
import { InputWithPrefixComponent } from './input-with-prefix/input-with-prefix.component';
import { InputWithSuffixComponent } from './input-with-suffix/input-with-suffix.component';
import { InputWithActionComponent } from './input-with-action/input-with-action.component';
import { OptionalInputComponent } from './optional-input/optional-input.component';
import { DisabledInputComponent } from './disabled-input/disabled-input.component';
import { InputWithPatternConstraintComponent } from './input-with-pattern-constraint/input-with-pattern-constraint.component';
import { InputWithLengthConstraintComponent } from './input-with-length-constraint/input-with-length-constraint.component';
import { InvalidInputComponent } from './invalid-input/invalid-input.component';
import { InputWithCustomErrorComponent } from './input-with-custom-error/input-with-custom-error.component';
import { FillParentSizeInputComponent } from './fill-parent-size-input/fill-parent-size-input.component';



@NgModule({
  declarations: [ControlledInputComponent, UncontrolledInputComponent, InputWithHelperTextComponent, InputWithPlaceholderComponent, InputWithPrefixComponent, InputWithSuffixComponent, InputWithActionComponent, OptionalInputComponent, DisabledInputComponent, InputWithPatternConstraintComponent, InputWithLengthConstraintComponent, InvalidInputComponent, InputWithCustomErrorComponent, FillParentSizeInputComponent],
  imports: [
    CommonModule
  ]
})
export class TextInputModule { }
