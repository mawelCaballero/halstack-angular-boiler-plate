import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextInputFunctionSuggestionsComponent } from './views/autosuggest/text-input-function-suggestions/text-input-function-suggestions.component';
import { TextInputWithSuggestionsComponent } from './views/autosuggest/text-input-with-suggestions/text-input-with-suggestions.component';
import { ButtonModesComponent } from './views/button/button-modes/button-modes.component';
import { ButtonWithIconComponent } from './views/button/button-with-icon/button-with-icon.component';
import { FillParentButtonComponent } from './views/button/fill-parent-button/fill-parent-button.component';
import { SizedButtonComponent } from './views/button/sized-button/sized-button.component';
import { CheckboxControlledComponent } from './views/checkbox/checkbox-controlled/checkbox-controlled.component';
import { CheckboxLabelPositionComponent } from './views/checkbox/checkbox-label-position/checkbox-label-position.component';
import { CheckboxSizedComponent } from './views/checkbox/checkbox-sized/checkbox-sized.component';
import { CheckboxUncontrolledComponent } from './views/checkbox/checkbox-uncontrolled/checkbox-uncontrolled.component';
import { ControlledDateInputComponent } from './views/date-input/controlled-date-input/controlled-date-input.component';
import { ControlledDateComponent } from './views/date/controlled-date/controlled-date.component';
import { SizedDateComponent } from './views/date/sized-date/sized-date.component';
import { UncontrolledDateComponent } from './views/date/uncontrolled-date/uncontrolled-date.component';
import { UncontrolledDateInputComponent } from './views/date-input/uncontrolled-date-input/uncontrolled-date-input.component';
import { CustomErrorDateInputComponent } from './views/date-input/custom-error-date-input/custom-error-date-input.component';
import { DateWithHelperComponent } from './views/date-input/date-with-helper/date-with-helper.component';
import { DisabledDateInputComponent } from './views/date-input/disabled-date-input/disabled-date-input.component';
import { FillParentSizeInputComponent } from './views/text-input/fill-parent-size-input/fill-parent-size-input.component';
import { FormattedDateInputComponent } from './views/date-input/formatted-date-input/formatted-date-input.component';
import { InvalidDateInputComponent } from './views/date-input/invalid-date-input/invalid-date-input.component';
import { OptionalDateInputComponent } from './views/date-input/optional-date-input/optional-date-input.component';
import { CloseDialogComponent } from './views/dialog/close-dialog/close-dialog.component';
import { DefaultDialogComponent } from './views/dialog/default-dialog/default-dialog.component';
import { ModalDialogComponent } from './views/dialog/modal-dialog/modal-dialog.component';
import { DefaultDropdownComponent } from './views/dropdown/default-dropdown/default-dropdown.component';
import { DefaultDropdownExpandOnHoverComponent } from './views/dropdown/default-dropdown-expand-on-hover/default-dropdown-expand-on-hover.component';
import { DefaultFileInputComponent } from './views/file-input/default-file-input/default-file-input.component';
import { DisabledFileInputComponent } from './views/file-input/disabled-file-input/disabled-file-input.component';
import { FileInputModesComponent } from './views/file-input/file-input-modes/file-input-modes.component';
import { FileInputWithAcceptedFilesComponent } from './views/file-input/file-input-with-accepted-files/file-input-with-accepted-files.component';
import { FileInputWithErrorComponent } from './views/file-input/file-input-with-error/file-input-with-error.component';
import { FileInputWithOneFileComponent } from './views/file-input/file-input-with-one-file/file-input-with-one-file.component';
import { FileInputWithPreviewComponent } from './views/file-input/file-input-with-preview/file-input-with-preview.component';
import { CustomContenttFooterComponent } from './views/footer/custom-contentt-footer/custom-contentt-footer.component';
import { DefaultFooterComponent } from './views/footer/default-footer/default-footer.component';
import { CustomHeaderComponent } from './views/header/custom-header/custom-header.component';
import { DefaultHeaderComponent } from './views/header/default-header/default-header.component';
import { HeaderWithDropdownComponent } from './views/header/header-with-dropdown/header-with-dropdown.component';
import { DefaultHeadingsComponent } from './views/heading/default-headings/default-headings.component';
import { HeadingsWithDifferentWeightsComponent } from './views/heading/headings-with-different-weights/headings-with-different-weights.component';
import { ControlledInputTextComponent } from './views/input-text/controlled-input-text/controlled-input-text.component';
import { FillParentInputTextComponent } from './views/input-text/fill-parent-input-text/fill-parent-input-text.component';
import { PreffixSuffixInputTextComponent } from './views/input-text/preffix-suffix-input-text/preffix-suffix-input-text.component';
import { SizedInputTextComponent } from './views/input-text/sized-input-text/sized-input-text.component';
import { UncontrolledInputTextComponent } from './views/input-text/uncontrolled-input-text/uncontrolled-input-text.component';
import { DefaultLinkComponent } from './views/link/default-link/default-link.component';
import { DisabledLinkComponent } from './views/link/disabled-link/disabled-link.component';
import { LinkWithActionComponent } from './views/link/link-with-action/link-with-action.component';
import { LinkWithIconComponent } from './views/link/link-with-icon/link-with-icon.component';
import { UndecoratedLinkWithNewWindowComponent } from './views/link/undecorated-link-with-new-window/undecorated-link-with-new-window.component';
import { ControlledNumberModule } from './views/number-input/controlled-number/controlled-number.module';
import { CustomErrorNumberComponent } from './views/number-input/custom-error-number/custom-error-number.component';
import { DisabledNumberComponent } from './views/number-input/disabled-number/disabled-number.component';
import { FillParentSizeNumberComponent } from './views/number-input/fill-parent-size-number/fill-parent-size-number.component';
import { HelperTextNumberComponent } from './views/number-input/helper-text-number/helper-text-number.component';
import { InvalidNumberComponent } from './views/number-input/invalid-number/invalid-number.component';
import { MinMaxStepNumberComponent } from './views/number-input/min-max-step-number/min-max-step-number.component';
import { OptionalNumberComponent } from './views/number-input/optional-number/optional-number.component';
import { PlaceholderNumberComponent } from './views/number-input/placeholder-number/placeholder-number.component';
import { PreffixNumberComponent } from './views/number-input/preffix-number/preffix-number.component';
import { SuffixNumberComponent } from './views/number-input/suffix-number/suffix-number.component';
import { UncontrolledNumberComponent } from './views/number-input/uncontrolled-number/uncontrolled-number.component';
import { PaginatorComponent } from './views/paginator/paginator/paginator.component';
import { ControlledPasswordComponent } from './views/password-input/controlled-password/controlled-password.component';
import { CustomErrorPasswordComponent } from './views/password-input/custom-error-password/custom-error-password.component';
import { FillParentSizePasswordComponent } from './views/password-input/fill-parent-size-password/fill-parent-size-password.component';
import { LengthConstraintPasswordComponent } from './views/password-input/length-constraint-password/length-constraint-password.component';
import { PatternConstraintPasswordComponent } from './views/password-input/pattern-constraint-password/pattern-constraint-password.component';
import { UncontrolledPasswordComponent } from './views/password-input/uncontrolled-password/uncontrolled-password.component';
import { DeterminateDefaultProgressBarComponent } from './views/progress-bar/determinate-default-progress-bar/determinate-default-progress-bar.component';
import { ProgressBarWithOverlayComponent } from './views/progress-bar/progress-bar-with-overlay/progress-bar-with-overlay.component';
import { UndeterminateDefaultProgressBarComponent } from './views/progress-bar/undeterminate-default-progress-bar/undeterminate-default-progress-bar.component';
import { RadioControlledComponent } from './views/radio-button/radio-controlled/radio-controlled.component';
import { RadioGroupComponent } from './views/radio-button/radio-group/radio-group.component';
import { RadioLabelPositionComponent } from './views/radio-button/radio-label-position/radio-label-position.component';
import { RadioSizedComponent } from './views/radio-button/radio-sized/radio-sized.component';
import { RadioUncontrolledComponent } from './views/radio-button/radio-uncontrolled/radio-uncontrolled.component';
import { DefaultResultsetTableComponent } from './views/resultset-table/default-resultset-table/default-resultset-table.component';
import { DefaultSidenavComponent } from './views/sidenav/default-sidenav/default-sidenav.component';
import { SidenavWithChildrenComponent } from './views/sidenav/sidenav-with-children/sidenav-with-children.component';
import { ContinuousSliderComponent } from './views/slider/continuous-slider/continuous-slider.component';
import { ControlledSliderComponent } from './views/slider/controlled-slider/controlled-slider.component';
import { DisabledSliderComponent } from './views/slider/disabled-slider/disabled-slider.component';
import { DiscreteSliderComponent } from './views/slider/discrete-slider/discrete-slider.component';
import { SizedSliderComponent } from './views/slider/sized-slider/sized-slider.component';
import { SliderNoLimitValuesComponent } from './views/slider/slider-no-limit-values/slider-no-limit-values.component';
import { SliderWithInputComponent } from './views/slider/slider-with-input/slider-with-input.component';
import { UncontrolledSliderComponent } from './views/slider/uncontrolled-slider/uncontrolled-slider.component';
import { DeterminedSpinnerComponent } from './views/spinner/determined-spinner/determined-spinner.component';
import { SmallSpinnerComponent } from './views/spinner/small-spinner/small-spinner.component';
import { SpinnerWithOverlayComponent } from './views/spinner/spinner-with-overlay/spinner-with-overlay.component';
import { UndeterminedSpinnerComponent } from './views/spinner/undetermined-spinner/undetermined-spinner.component';
import { ControlledSwitchComponent } from './views/switch/controlled-switch/controlled-switch.component';
import { LabelPositionSwitchComponent } from './views/switch/label-position-switch/label-position-switch.component';
import { UncontrolledSwitchComponent } from './views/switch/uncontrolled-switch/uncontrolled-switch.component';
import { DefaultTabbedSectionComponent } from './views/tabbed-section/default-tabbed-section/default-tabbed-section.component';
import { SimpleTableComponent } from './views/table/simple-table/simple-table.component';
import { AddTabsDynamicallyComponent } from './views/tabs/add-tabs-dynamically/add-tabs-dynamically.component';
import { ControlledTabsComponent } from './views/tabs/controlled-tabs/controlled-tabs.component';
import { TabsWithContentComponent } from './views/tabs/tabs-with-content/tabs-with-content.component';
import { UncontrolledTabsComponent } from './views/tabs/uncontrolled-tabs/uncontrolled-tabs.component';
import { BasicTagModule } from './views/tag/basic-tag/basic-tag.module';
import { BasicTagComponent } from './views/tag/basic-tag/basic-tag.component';
import { SizedTagComponent } from './views/tag/sized-tag/sized-tag.component';
import { TagWithIconComponent } from './views/tag/tag-with-icon/tag-with-icon.component';
import { TagWithLinkComponent } from './views/tag/tag-with-link/tag-with-link.component';
import { ControlledInputComponent } from './views/text-input/controlled-input/controlled-input.component';
import { DisabledInputComponent } from './views/text-input/disabled-input/disabled-input.component';
import { InputWithActionComponent } from './views/text-input/input-with-action/input-with-action.component';
import { InputWithCustomErrorComponent } from './views/text-input/input-with-custom-error/input-with-custom-error.component';
import { InputWithHelperTextComponent } from './views/text-input/input-with-helper-text/input-with-helper-text.component';
import { InputWithLengthConstraintComponent } from './views/text-input/input-with-length-constraint/input-with-length-constraint.component';
import { InputWithPatternConstraintComponent } from './views/text-input/input-with-pattern-constraint/input-with-pattern-constraint.component';
import { InputWithPlaceholderComponent } from './views/text-input/input-with-placeholder/input-with-placeholder.component';
import { InputWithPrefixComponent } from './views/text-input/input-with-prefix/input-with-prefix.component';
import { InputWithSuffixComponent } from './views/text-input/input-with-suffix/input-with-suffix.component';
import { InvalidInputComponent } from './views/text-input/invalid-input/invalid-input.component';
import { OptionalInputComponent } from './views/text-input/optional-input/optional-input.component';
import { UncontrolledInputComponent } from './views/text-input/uncontrolled-input/uncontrolled-input.component';
import { ControlledTextareaComponent } from './views/textarea/controlled-textarea/controlled-textarea.component';
import { DisabledTextareaComponent } from './views/textarea/disabled-textarea/disabled-textarea.component';
import { FillParentSizeTextareaComponent } from './views/textarea/fill-parent-size-textarea/fill-parent-size-textarea.component';
import { InvalidTextareaComponent } from './views/textarea/invalid-textarea/invalid-textarea.component';
import { OptionalTextareaComponent } from './views/textarea/optional-textarea/optional-textarea.component';
import { TextareaVertialgrowManualComponent } from './views/textarea/textarea-vertialgrow-manual/textarea-vertialgrow-manual.component';
import { TextareaVertialgrowNoneComponent } from './views/textarea/textarea-vertialgrow-none/textarea-vertialgrow-none.component';
import { TextareaWithCustomErrorComponent } from './views/textarea/textarea-with-custom-error/textarea-with-custom-error.component';
import { TextareaWithDefaultRowsComponent } from './views/textarea/textarea-with-default-rows/textarea-with-default-rows.component';
import { TextareaWithHelperTextComponent } from './views/textarea/textarea-with-helper-text/textarea-with-helper-text.component';
import { TextareaWithLengthConstraintComponent } from './views/textarea/textarea-with-length-constraint/textarea-with-length-constraint.component';
import { TextareaWithPatternConstraintComponent } from './views/textarea/textarea-with-pattern-constraint/textarea-with-pattern-constraint.component';
import { TextareaWithPlaceholderComponent } from './views/textarea/textarea-with-placeholder/textarea-with-placeholder.component';
import { UncontrolledTextareaComponent } from './views/textarea/uncontrolled-textarea/uncontrolled-textarea.component';
import { BasicToggleGroupComponent } from './views/toggle-group/basic-toggle-group/basic-toggle-group.component';
import { ControlledToggleGroupComponent } from './views/toggle-group/controlled-toggle-group/controlled-toggle-group.component';
import { DisabledToggleGroupComponent } from './views/toggle-group/disabled-toggle-group/disabled-toggle-group.component';
import { MultipleToggleGroupComponent } from './views/toggle-group/multiple-toggle-group/multiple-toggle-group.component';
import { DefaultUploadComponent } from './views/uplodad/default-upload/default-upload.component';
import { V3ControlledSelectComponent } from './views/v3-select/v3-controlled-select/v3-controlled-select.component';
import { V3MultipleSelectComponent } from './views/v3-select/v3-multiple-select/v3-multiple-select.component';
import { V3SizedSelectComponent } from './views/v3-select/v3-sized-select/v3-sized-select.component';
import { V3UncontrolledSelectComponent } from './views/v3-select/v3-uncontrolled-select/v3-uncontrolled-select.component';
import { V3WithIconsSelectComponent } from './views/v3-select/v3-with-icons-select/v3-with-icons-select.component';
import { V3ControlledTextareaComponent } from './views/v3-textarea/v3-controlled-textarea/v3-controlled-textarea.component';
import { V3DisabledTextareaComponent } from './views/v3-textarea/v3-disabled-textarea/v3-disabled-textarea.component';
import { V3FillParentTextareaComponent } from './views/v3-textarea/v3-fill-parent-textarea/v3-fill-parent-textarea.component';
import { V3InvalidTextareaComponent } from './views/v3-textarea/v3-invalid-textarea/v3-invalid-textarea.component';
import { V3RequiredTextareaComponent } from './views/v3-textarea/v3-required-textarea/v3-required-textarea.component';
import { V3UncontrolledTextareaComponent } from './views/v3-textarea/v3-uncontrolled-textarea/v3-uncontrolled-textarea.component';
import { DefaultSelectComponent } from './views/select/default-select/default-select.component';
import { DisabledSelectComponent } from './views/select/disabled-select/disabled-select.component';
import { ErrorMultipleSelectComponent } from './views/select/error-multiple-select/error-multiple-select.component';
import { ErrorSelectComponent } from './views/select/error-select/error-select.component';
import { MultipleSelectComponent } from './views/select/multiple-select/multiple-select.component';
import { SearchableSelectComponent } from './views/select/searchable-select/searchable-select.component';

let routes: Routes = [];
routes.push({ path: '', redirectTo: 'buttonModes', pathMatch: 'full' });
//Button
routes.push({ path: 'buttonModes',  component: ButtonModesComponent });
routes.push({ path: 'buttonWithIcon', loadChildren: () => import('./views/button/button-with-icon/button-with-icon.module').then(m => m.ButtonWithIconModule) });

// routes.push({ path: 'buttonWithIcon', component: ButtonWithIconComponent });
// routes.push({ path: 'sizedButton', component: SizedButtonComponent });
// routes.push({ path: 'fillParentButton', component: FillParentButtonComponent });
// routes.push({ path: 'autosuggestInput', component: TextInputWithSuggestionsComponent });
// routes.push({ path: 'autosuggest-function-input', component: TextInputFunctionSuggestionsComponent });

// //Checkbox
// routes.push({ path: 'checkbox-controlled', component: CheckboxControlledComponent });
// routes.push({ path: 'checkbox-label-position', component: CheckboxLabelPositionComponent });
// routes.push({ path: 'checkbox-sized', component: CheckboxSizedComponent });
// routes.push({ path: 'checkbox-uncontrolled', component: CheckboxUncontrolledComponent });

// //Date
// routes.push({ path: 'controlled-date', component: ControlledDateComponent });
// routes.push({ path: 'uncontrolled-date', component: UncontrolledDateComponent });
// routes.push({ path: 'sized-date', component: SizedDateComponent });

// // Date input
// routes.push({ path: 'controlled-date-input', component: ControlledDateInputComponent });
// routes.push({ path: 'uncontrolled-date-input', component: UncontrolledDateInputComponent });
// routes.push({ path: 'custom-error-date-input', component: CustomErrorDateInputComponent });
// routes.push({ path: 'date-input-with-helper-text', component: DateWithHelperComponent });
// routes.push({ path: 'disabled-date-input', component: DisabledDateInputComponent });
// routes.push({ path: 'fill-parent-sized-date-input', component: FillParentSizeInputComponent });
// routes.push({ path: 'formatted-date-input', component: FormattedDateInputComponent });
// routes.push({ path: 'invalid-date-input', component: InvalidDateInputComponent });
// routes.push({ path: 'optional-date-input', component: OptionalDateInputComponent });

// //Dialog
// routes.push({ path: 'close-dialog', component: CloseDialogComponent });
// routes.push({ path: 'default-dialog', component: DefaultDialogComponent });
// routes.push({ path: 'modal-dialog', component: ModalDialogComponent });

// // Dropdown
// routes.push({ path: 'default-dropdown', component: DefaultDropdownComponent });
// routes.push({ path: 'default-dropdown-expand-on-hover', component: DefaultDropdownExpandOnHoverComponent });
// routes.push({ path: 'default-dropdown-expand-on-hover', component: DefaultDropdownExpandOnHoverComponent });

// //File-input
// routes.push({ path: 'default-file-input', component: DefaultFileInputComponent });
// routes.push({ path: 'disabled-file-input', component: DisabledFileInputComponent });
// routes.push({ path: 'file-input-modes', component: FileInputModesComponent });
// routes.push({ path: 'file-input-with-accepted-files', component: FileInputWithAcceptedFilesComponent });
// routes.push({ path: 'file-input-with-error', component: FileInputWithErrorComponent });
// routes.push({ path: 'file-input-with-one-file', component: FileInputWithOneFileComponent });
// routes.push({ path: 'file-input-with-preview', component: FileInputWithPreviewComponent });

// //Footer
// routes.push({ path: 'custom-content-footer', component: CustomContenttFooterComponent });
// routes.push({ path: 'default-footer', component: DefaultFooterComponent });

// //Header
// routes.push({ path: 'custom-header', component: CustomHeaderComponent });
// routes.push({ path: 'default-header', component: DefaultHeaderComponent });
// routes.push({ path: 'header-with-dropdown', component: HeaderWithDropdownComponent });

// //Heading
// routes.push({ path: 'default-headings', component: DefaultHeadingsComponent });
// routes.push({ path: 'headings-with-different-weights', component: HeadingsWithDifferentWeightsComponent });

// //InputTextModule
// routes.push({ path: 'controlled-input-text', component:  ControlledInputTextComponent });
// routes.push({ path: 'fill-parent-input-text', component:  FillParentInputTextComponent });
// routes.push({ path: 'preffix-suffix-input-text', component:  PreffixSuffixInputTextComponent });
// routes.push({ path: 'sized-input-text', component:  SizedInputTextComponent });
// routes.push({ path: 'uncontrolled-input-text', component:  UncontrolledInputTextComponent });

// //Link
// routes.push({ path: 'default-link', component: DefaultLinkComponent });
// routes.push({ path: 'disabled-link', component: DisabledLinkComponent });
// routes.push({ path: 'link-with-action', component: LinkWithActionComponent });
// routes.push({ path: 'link-with-icon', component: LinkWithIconComponent });
// routes.push({path: 'undecorated-link-with-new-window', component: UndecoratedLinkWithNewWindowComponent});

// //Number input
// routes.push({ path: 'controlled-number', component:  ControlledNumberModule });
// routes.push({ path: 'custom-error-number', component:  CustomErrorNumberComponent });
// routes.push({ path: 'disabled-number', component:  DisabledNumberComponent });
// routes.push({ path: 'fill-parent-size-number', component:  FillParentSizeNumberComponent });
// routes.push({ path: 'helper-text-number', component:  HelperTextNumberComponent });
// routes.push({ path: 'invalid-number', component:  InvalidNumberComponent });
// routes.push({ path: 'min-max-step-number', component:  MinMaxStepNumberComponent });
// routes.push({ path: 'optional-number', component:  OptionalNumberComponent });
// routes.push({ path: 'placeholder-number', component:  PlaceholderNumberComponent });
// routes.push({ path: 'preffix-number', component:  PreffixNumberComponent });
// routes.push({ path: 'suffix-number', component:  SuffixNumberComponent });
// routes.push({ path: 'uncontrolled-number', component:  UncontrolledNumberComponent });

// //Paginator
// routes.push({ path: 'default-paginator', component: PaginatorComponent});

// //Password
// routes.push({ path: 'controlled-password', component: ControlledPasswordComponent });
// routes.push({ path: 'custom-error-password', component: CustomErrorPasswordComponent });
// routes.push({ path: 'fill-parent-size-password', component: FillParentSizePasswordComponent });
// routes.push({ path: 'length-constraint-password', component: LengthConstraintPasswordComponent });
// routes.push({ path: 'pattern-constraint-password', component: PatternConstraintPasswordComponent });
// routes.push({ path: 'uncontrolled-password', component: UncontrolledPasswordComponent });

// //ProgressBar
// routes.push({ path: 'determinate-default-progress-bar', component: DeterminateDefaultProgressBarComponent});
// routes.push({ path: 'progress-bar-with-overlay', component: ProgressBarWithOverlayComponent });
// routes.push({ path: 'undeterminate-default-progress-bar', component: UndeterminateDefaultProgressBarComponent });

// //RadioButton
// routes.push({ path: 'radio-controlled', component: RadioControlledComponent});
// routes.push({ path: 'radio-group', component: RadioGroupComponent });
// routes.push({ path: 'radio-label-position', component: RadioLabelPositionComponent });
// routes.push({ path: 'radio-sized', component: RadioSizedComponent });
// routes.push({ path: 'radio-uncontrolled', component: RadioUncontrolledComponent });

// //Resultset Table
// routes.push({ path: 'resultset-table', component: DefaultResultsetTableComponent});

// //Sidenav
// routes.push({ path: 'default-sidenav', component: DefaultSidenavComponent});
// routes.push({ path: 'sidenav-with-children', component: SidenavWithChildrenComponent});

// //Slider
// routes.push({ path: 'continuous-slider', component: ContinuousSliderComponent});
// routes.push({ path: 'controlled-slider', component: ControlledSliderComponent});
// routes.push({ path: 'disabled-slider', component: DisabledSliderComponent});
// routes.push({ path: 'discrete-slider', component: DiscreteSliderComponent});
// routes.push({ path: 'sized-slider', component: SizedSliderComponent});
// routes.push({ path: 'slider-no-limit-values', component: SliderNoLimitValuesComponent});
// routes.push({ path: 'slider-with-input', component: SliderWithInputComponent});
// routes.push({ path: 'uncontrolled-slider', component: UncontrolledSliderComponent});

// //Spinner
// routes.push({ path: 'determined-spinner', component: DeterminedSpinnerComponent});
// routes.push({ path: 'small-spinner', component: SmallSpinnerComponent});
// routes.push({ path: 'spinner-with-overlay', component: SpinnerWithOverlayComponent});
// routes.push({ path: 'undetermined-spinner', component: UndeterminedSpinnerComponent});

// //Switch
// routes.push({ path: 'controlled-switch', component: ControlledSwitchComponent});
// routes.push({ path: 'label-position-switch', component: LabelPositionSwitchComponent});
// routes.push({ path: 'uncontrolled-switch', component: UncontrolledSwitchComponent});

// //TabbedSection
// routes.push({ path: 'default-tabbed-section', component: DefaultTabbedSectionComponent});

// //Table
// routes.push({ path: 'simple-table', component: SimpleTableComponent});

// //Tabs
// routes.push({ path:'add-tabs-dynamically', component: AddTabsDynamicallyComponent});
// routes.push({ path:'controlled-tabs', component: ControlledTabsComponent});
// routes.push({ path:'tabs-with-content', component: TabsWithContentComponent});
// routes.push({ path:'uncontrolled-tabs', component: UncontrolledTabsComponent});

// //Tags
// routes.push({ path:'basic-tag', component: BasicTagComponent});
// routes.push({ path:'sized-tag', component: SizedTagComponent});
// routes.push({ path:'tag-with-icon', component: TagWithIconComponent});
// routes.push({ path:'tag-with-link', component: TagWithLinkComponent});

// //TextInput
// routes.push({ path:'controlled-input', component: ControlledInputComponent});
// routes.push({ path:'disabled-input', component: DisabledInputComponent});
// routes.push({ path: 'fill-parent-size-input', component: FillParentSizeInputComponent});
// routes.push({ path: 'input-with-action', component: InputWithActionComponent});
// routes.push({ path: 'input-with-custom-error', component: InputWithCustomErrorComponent});
// routes.push({ path: 'input-with-helper-text', component:InputWithHelperTextComponent});
// routes.push({ path: 'input-with-length-constraint', component: InputWithLengthConstraintComponent});
// routes.push({ path: 'input-with-pattern-constraint', component: InputWithPatternConstraintComponent});
// routes.push({ path: 'input-with-placeholder', component: InputWithPlaceholderComponent});
// routes.push({ path: 'input-with-prefix', component: InputWithPrefixComponent});
// routes.push({ path: 'input-with-suffix', component: InputWithSuffixComponent});
// routes.push({ path: 'invalid-input', component: InvalidInputComponent});
// routes.push({ path: 'optional-input', component: OptionalInputComponent});
// routes.push({ path: 'uncontrolled-input', component: UncontrolledInputComponent});

// //TextArea
// routes.push({ path: 'controlled-textarea', component: ControlledTextareaComponent});
// routes.push({ path: 'disabled-textarea', component: DisabledTextareaComponent});
// routes.push({ path: 'fill-parent-size-textarea', component: FillParentSizeTextareaComponent});
// routes.push({ path: 'invalid-textarea', component: InvalidTextareaComponent});
// routes.push({ path: 'optional-textarea', component: OptionalTextareaComponent});
// routes.push({ path: 'textarea-vertical-grow-manual', component: TextareaVertialgrowManualComponent});
// routes.push({ path: 'textarea-vertical-grow-none', component: TextareaVertialgrowNoneComponent});
// routes.push({ path: 'textarea-with-custom-error', component: TextareaWithCustomErrorComponent});
// routes.push({ path: 'textarea-with-default-rows', component: TextareaWithDefaultRowsComponent});
// routes.push({ path: 'textarea-with-helper-text', component: TextareaWithHelperTextComponent});
// routes.push({ path: 'textarea-with-length-constraint', component: TextareaWithLengthConstraintComponent});
// routes.push({ path: 'textarea-with-pattern-constraint', component: TextareaWithPatternConstraintComponent});
// routes.push({ path: 'textarea-with-placeholder', component: TextareaWithPlaceholderComponent});
// routes.push({ path: 'uncontrolled-textarea', component: UncontrolledTextareaComponent});

// //Toogle-Group
// routes.push({ path: 'basic-toogle-group', component: BasicToggleGroupComponent});
// routes.push({ path: 'controlled-toggle-group', component: ControlledToggleGroupComponent});
// routes.push({ path: 'disabled-toggle-group', component: DisabledToggleGroupComponent});
// routes.push({ path: 'multiple-toggle-group', component: MultipleToggleGroupComponent});

// //Upload
// routes.push({ path: 'default-upload', component: DefaultUploadComponent});

// //V3 Select
// routes.push({ path: 'v3-controlled-select', component: V3ControlledSelectComponent});
// routes.push({ path: 'v3-multiple-select', component: V3MultipleSelectComponent});
// routes.push({ path: 'v3-sized-select', component: V3SizedSelectComponent});
// routes.push({ path: 'v3-uncontrolled-select', component: V3UncontrolledSelectComponent});
// routes.push({ path: 'v3-with-icons-select', component: V3WithIconsSelectComponent});

// //V3 Textarea
// routes.push({ path: 'v3-controlled-textarea', component: V3ControlledTextareaComponent});
// routes.push({ path: 'v3-disabled-textarea', component: V3DisabledTextareaComponent});
// routes.push({ path: 'v3-fill-parent-textarea', component: V3FillParentTextareaComponent});
// routes.push({ path: 'v3-invalid-textarea', component: V3InvalidTextareaComponent});
// routes.push({ path: 'v3-required-textarea', component: V3RequiredTextareaComponent});
// routes.push({ path: 'v3-uncontrolled-textarea', component: V3UncontrolledTextareaComponent});

// //Select
// routes.push({ path: 'default-select', component: DefaultSelectComponent});
// routes.push({ path: 'disabled-select', component: DisabledSelectComponent});
// routes.push({ path: 'error-multiple-select', component: ErrorMultipleSelectComponent});
// routes.push({ path: 'error-select', component: ErrorSelectComponent});
// routes.push({ path: 'multiple-select', component: MultipleSelectComponent});
// routes.push({ path: 'searchable-select', component: SearchableSelectComponent});

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
