import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledTextareaComponent } from './controlled-textarea/controlled-textarea.component';
import { UncontrolledTextareaComponent } from './uncontrolled-textarea/uncontrolled-textarea.component';
import { TextareaWithHelperTextComponent } from './textarea-with-helper-text/textarea-with-helper-text.component';
import { TextareaWithPlaceholderComponent } from './textarea-with-placeholder/textarea-with-placeholder.component';
import { DisabledTextareaComponent } from './disabled-textarea/disabled-textarea.component';
import { OptionalTextareaComponent } from './optional-textarea/optional-textarea.component';
import { TextareaVertialgrowManualComponent } from './textarea-vertialgrow-manual/textarea-vertialgrow-manual.component';
import { TextareaVertialgrowNoneComponent } from './textarea-vertialgrow-none/textarea-vertialgrow-none.component';
import { TextareaWithDefaultRowsComponent } from './textarea-with-default-rows/textarea-with-default-rows.component';
import { InvalidTextareaComponent } from './invalid-textarea/invalid-textarea.component';
import { TextareaWithPatternConstraintComponent } from './textarea-with-pattern-constraint/textarea-with-pattern-constraint.component';
import { TextareaWithLengthConstraintComponent } from './textarea-with-length-constraint/textarea-with-length-constraint.component';
import { TextareaWithCustomErrorComponent } from './textarea-with-custom-error/textarea-with-custom-error.component';
import { FillParentSizeTextareaComponent } from './fill-parent-size-textarea/fill-parent-size-textarea.component';



@NgModule({
  declarations: [ControlledTextareaComponent, UncontrolledTextareaComponent, TextareaWithHelperTextComponent, TextareaWithPlaceholderComponent, DisabledTextareaComponent, OptionalTextareaComponent, TextareaVertialgrowManualComponent, TextareaVertialgrowNoneComponent, TextareaWithDefaultRowsComponent, InvalidTextareaComponent, TextareaWithPatternConstraintComponent, TextareaWithLengthConstraintComponent, TextareaWithCustomErrorComponent, FillParentSizeTextareaComponent],
  imports: [
    CommonModule
  ]
})
export class TextareaModule { }
