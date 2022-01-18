import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlledTextareaModule } from './controlled-textarea/controlled-textarea.module';
import { UncontrolledTextareaModule } from './uncontrolled-textarea/uncontrolled-textarea.module';
import { TextareaWithHelperTextModule } from './textarea-with-helper-text/textarea-with-helper-text.module';
import { TextareaWithPlaceholderModule } from './textarea-with-placeholder/textarea-with-placeholder.module';
import { DisabledTextareaModule } from './disabled-textarea/disabled-textarea.module';
import { OptionalTextareaModule } from './optional-textarea/optional-textarea.module';
import { TextareaVertialgrowManualModule } from './textarea-vertialgrow-manual/textarea-vertialgrow-manual.module';
import { TextareaVertialgrowNoneModule } from './textarea-vertialgrow-none/textarea-vertialgrow-none.module';
import { TextareaWithDefaultRowsModule } from './textarea-with-default-rows/textarea-with-default-rows.module';
import { TextareaWithPatternConstraintModule } from './textarea-with-pattern-constraint/textarea-with-pattern-constraint.module';
import { TextareaWithLengthConstraintModule } from './textarea-with-length-constraint/textarea-with-length-constraint.module';
import { TextareaWithCustomErrorModule } from './textarea-with-custom-error/textarea-with-custom-error.module';
import { FillParentSizeTextareaModule } from './fill-parent-size-textarea/fill-parent-size-textarea.module';
import { InvalidTextareaModule } from './invalid-textarea/invalid-textarea.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ControlledTextareaModule,
    UncontrolledTextareaModule,
    TextareaWithHelperTextModule,
    TextareaWithPlaceholderModule,
    DisabledTextareaModule,
    OptionalTextareaModule,
    InvalidTextareaModule,
    TextareaVertialgrowManualModule,
    TextareaVertialgrowNoneModule,
    TextareaWithDefaultRowsModule,
    TextareaWithPatternConstraintModule,
    TextareaWithLengthConstraintModule,
    TextareaWithCustomErrorModule,
    FillParentSizeTextareaModule
  ]
})
export class TextareaModule { }
