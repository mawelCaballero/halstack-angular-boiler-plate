import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonModesComponent } from './views/button/button-modes/button-modes.component';

let routes: Routes = [];

routes.push({
  path: 'controlledAccordionGroup',
  loadChildren: () =>
    import('./views/accordion-group/controlled-accordion-group/controlled-accordion-group.module').then(
      (m) => m.ControlledAccordionGroupModule
    ),
});

routes.push({
  path: 'uncontrolledAccordionGroup',
  loadChildren: () =>
    import('./views/accordion-group/uncontrolled-accordion-group/uncontrolled-accordion-group.module').then(
      (m) => m.UncontrolledAccordionGroupModule
    ),
});

routes.push({
  path: 'disabledAccordionGroup',
  loadChildren: () =>
    import('./views/accordion-group/disabled-accordion-group/disabled-accordion-group.module').then(
      (m) => m.DisabledAccordionGroupModule
    ),
});

routes.push({ path: '', redirectTo: 'buttonModes', pathMatch: 'full' });
//Button
routes.push({ path: 'buttonModes', component: ButtonModesComponent });
routes.push({
  path: 'buttonWithIcon',
  loadChildren: () =>
    import('./views/button/button-with-icon/button-with-icon.module').then(
      (m) => m.ButtonWithIconModule
    ),
});
routes.push({
  path: 'sizedButton',
  loadChildren: () =>
    import('./views/button/sized-button/sized-button.module').then(
      (m) => m.SizedButtonModule
    ),
});
routes.push({
  path: 'fillParentButton',
  loadChildren: () =>
    import('./views/button/fill-parent-button/fill-parent-button.module').then(
      (m) => m.FillParentButtonModule
    ),
});

//Accordion
//routes.push({ path: 'accordionWithAssistiveText', loadChildren: () => import('./views/accordion/accordion-with-assistive-text/accordion-with-assistive-text.module').then(m => m.TextInputFunctionSuggestionsModule) });

//AccordionGroup

//Alert

//ApplicationLayout

//Autosuggest
routes.push({
  path: 'autosuggestInput',
  loadChildren: () =>
    import(
      './views/autosuggest/text-input-function-suggestions/text-input-function-suggestions.module'
    ).then((m) => m.TextInputFunctionSuggestionsModule),
});
routes.push({
  path: 'autosuggestFunctionInput',
  loadChildren: () =>
    import(
      './views/autosuggest/text-input-with-suggestions/text-input-with-suggestions.module'
    ).then((m) => m.TextInputWithSuggestionsModule),
});

//Box

//Card

//Checkbox
routes.push({
  path: 'checkboxControlled',
  loadChildren: () =>
    import(
      './views/checkbox/checkbox-controlled/checkbox-controlled.module'
    ).then((m) => m.CheckboxControlledModule),
});
routes.push({
  path: 'checkboxLabelPosition',
  loadChildren: () =>
    import(
      './views/checkbox/checkbox-label-position/checkbox-label-position.module'
    ).then((m) => m.CheckboxLabelPositionModule),
});
routes.push({
  path: 'checkboxSized',
  loadChildren: () =>
    import('./views/checkbox/checkbox-sized/checkbox-sized.module').then(
      (m) => m.CheckboxSizedModule
    ),
});
routes.push({
  path: 'checkboxUncontrolled',
  loadChildren: () =>
    import(
      './views/checkbox/checkbox-uncontrolled/checkbox-uncontrolled.module'
    ).then((m) => m.CheckboxUncontrolledModule),
});

//Chip

//Date
routes.push({
  path: 'controlledDate',
  loadChildren: () =>
    import('./views/date/controlled-date/controlled-date.module').then(
      (m) => m.ControlledDateModule
    ),
});
routes.push({
  path: 'uncontrolledDate',
  loadChildren: () =>
    import('./views/date/uncontrolled-date/uncontrolled-date.module').then(
      (m) => m.UncontrolledDateModule
    ),
});
routes.push({
  path: 'sizedDate',
  loadChildren: () =>
    import('./views/date/sized-date/sized-date.module').then(
      (m) => m.SizedDateModule
    ),
});

// Date input
routes.push({
  path: 'controlledDateInput',
  loadChildren: () =>
    import(
      './views/date-input/controlled-date-input/controlled-date-input.module'
    ).then((m) => m.ControlledDateInputModule),
});
routes.push({
  path: 'uncontrolledDateInput',
  loadChildren: () =>
    import(
      './views/date-input/uncontrolled-date-input/uncontrolled-date-input.module'
    ).then((m) => m.UncontrolledDateInputModule),
});
routes.push({
  path: 'customErrorDateInput',
  loadChildren: () =>
    import(
      './views/date-input/custom-error-date-input/custom-error-date-input.module'
    ).then((m) => m.CustomErrorDateInputModule),
});
routes.push({
  path: 'dateInputWithHelperText',
  loadChildren: () =>
    import('./views/date-input/date-with-helper/date-with-helper.module').then(
      (m) => m.DateWithHelperModule
    ),
});
routes.push({
  path: 'disabledDateInput',
  loadChildren: () =>
    import(
      './views/date-input/disabled-date-input/disabled-date-input.module'
    ).then((m) => m.DisabledDateInputModule),
});
routes.push({
  path: 'fillParentSizedDateInput',
  loadChildren: () =>
    import(
      './views/date-input/fill-parent-sized-date-input/fill-parent-sized-date-input.module'
    ).then((m) => m.FillParentSizedDateInputModule),
});
routes.push({
  path: 'formattedDateInput',
  loadChildren: () =>
    import(
      './views/date-input/formatted-date-input/formatted-date-input.module'
    ).then((m) => m.FormattedDateInputModule),
});
routes.push({
  path: 'invalidDateInput',
  loadChildren: () =>
    import(
      './views/date-input/invalid-date-input/invalid-date-input.module'
    ).then((m) => m.InvalidDateInputModule),
});
routes.push({
  path: 'optionalDateInput',
  loadChildren: () =>
    import(
      './views/date-input/optional-date-input/optional-date-input.module'
    ).then((m) => m.OptionalDateInputModule),
});

//Dialog
routes.push({
  path: 'closeDialog',
  loadChildren: () =>
    import('./views/dialog/close-dialog/close-dialog.module').then(
      (m) => m.CloseDialogModule
    ),
});
routes.push({
  path: 'defaultDialog',
  loadChildren: () =>
    import('./views/dialog/default-dialog/default-dialog.module').then(
      (m) => m.DefaultDialogModule
    ),
});
routes.push({
  path: 'modalDialog',
  loadChildren: () =>
    import('./views/dialog/modal-dialog/modal-dialog.module').then(
      (m) => m.ModalDialogModule
    ),
});

//Dropdown
routes.push({
  path: 'defaultDropdown',
  loadChildren: () =>
    import('./views/dropdown/default-dropdown/default-dropdown.module').then(
      (m) => m.DefaultDropdownModule
    ),
});
routes.push({
  path: 'defaultDropdownExpandOnHover',
  loadChildren: () =>
    import(
      './views/dropdown/default-dropdown-expand-on-hover/default-dropdown-expand-on-hover.module'
    ).then((m) => m.DefaultDropdownExpandOnHoverModule),
});
routes.push({
  path: 'dropdownWithIcons',
  loadChildren: () =>
    import(
      './views/dropdown/dropdown-with-icons/dropdown-with-icons.module'
    ).then((m) => m.DropdownWithIconsModule),
});

//File-input
routes.push({
  path: 'defaultFileInput',
  loadChildren: () =>
    import(
      './views/file-input/default-file-input/default-file-input.module'
    ).then((m) => m.DefaultFileInputModule),
});
routes.push({
  path: 'disabledFileInput',
  loadChildren: () =>
    import(
      './views/file-input/disabled-file-input/disabled-file-input.module'
    ).then((m) => m.DisabledFileInputModule),
});
routes.push({
  path: 'fileInputModes',
  loadChildren: () =>
    import('./views/file-input/file-input-modes/file-input-modes.module').then(
      (m) => m.FileInputModesModule
    ),
});
routes.push({
  path: 'fileInputWithAcceptedFiles',
  loadChildren: () =>
    import(
      './views/file-input/file-input-with-accepted-files/file-input-with-accepted-files.module'
    ).then((m) => m.FileInputWithAcceptedFilesModule),
});
routes.push({
  path: 'fileInputWithError',
  loadChildren: () =>
    import(
      './views/file-input/file-input-with-error/file-input-with-error.module'
    ).then((m) => m.FileInputWithErrorModule),
});
routes.push({
  path: 'fileIputWithOneFile',
  loadChildren: () =>
    import(
      './views/file-input/file-input-with-one-file/file-input-with-one-file.module'
    ).then((m) => m.FileInputWithOneFileModule),
});
routes.push({
  path: 'fileInputWithPreview',
  loadChildren: () =>
    import(
      './views/file-input/file-input-with-preview/file-input-with-preview.module'
    ).then((m) => m.FileInputWithPreviewModule),
});

//Footer
routes.push({
  path: 'customContentFooter',
  loadChildren: () =>
    import(
      './views/footer/custom-contentt-footer/custom-contentt-footer.module'
    ).then((m) => m.CustomContenttFooterModule),
});
routes.push({
  path: 'defaultFooter',
  loadChildren: () =>
    import('./views/footer/default-footer/default-footer.module').then(
      (m) => m.DefaultFooterModule
    ),
});

//Header
routes.push({
  path: 'customHeader',
  loadChildren: () =>
    import('./views/header/custom-header/custom-header.module').then(
      (m) => m.CustomHeaderModule
    ),
});
routes.push({
  path: 'defaultHeader',
  loadChildren: () =>
    import('./views/header/default-header/default-header.module').then(
      (m) => m.DefaultHeaderModule
    ),
});
routes.push({
  path: 'headerWithDropdown',
  loadChildren: () =>
    import(
      './views/header/header-with-dropdown/header-with-dropdown.module'
    ).then((m) => m.HeaderWithDropdownModule),
});

//Heading
routes.push({
  path: 'defaultHeadings',
  loadChildren: () =>
    import('./views/heading/default-headings/default-headings.module').then(
      (m) => m.DefaultHeadingsModule
    ),
});
routes.push({
  path: 'headingsWithDifferentWeights',
  loadChildren: () =>
    import(
      './views/heading/headings-with-different-weights/headings-with-different-weights.module'
    ).then((m) => m.HeadingsWithDifferentWeightsModule),
});

//InputTextModule
routes.push({
  path: 'controlledInputText',
  loadChildren: () =>
    import(
      './views/input-text/controlled-input-text/controlled-input-text.module'
    ).then((m) => m.ControlledInputTextModule),
});
routes.push({
  path: 'fillParentInputText',
  loadChildren: () =>
    import(
      './views/input-text/fill-parent-input-text/fill-parent-input-text.module'
    ).then((m) => m.FillParentInputTextModule),
});
routes.push({
  path: 'preffixSuffixInputText',
  loadChildren: () =>
    import(
      './views/input-text/preffix-suffix-input-text/preffix-suffix-input-text.module'
    ).then((m) => m.PreffixSuffixInputTextModule),
});
routes.push({
  path: 'sizedInputText',
  loadChildren: () =>
    import('./views/input-text/sized-input-text/sized-input-text.module').then(
      (m) => m.SizedInputTextModule
    ),
});
routes.push({
  path: 'uncontrolledInputText',
  loadChildren: () =>
    import(
      './views/input-text/uncontrolled-input-text/uncontrolled-input-text.module'
    ).then((m) => m.UncontrolledInputTextModule),
});

//Link
routes.push({
  path: 'defaultLink',
  loadChildren: () =>
    import('./views/link/default-link/default-link.module').then(
      (m) => m.DefaultLinkModule
    ),
});
routes.push({
  path: 'disabledLink',
  loadChildren: () =>
    import('./views/link/disabled-link/disabled-link.module').then(
      (m) => m.DisabledLinkModule
    ),
});
routes.push({
  path: 'linkWithAction',
  loadChildren: () =>
    import('./views/link/link-with-action/link-with-action.module').then(
      (m) => m.LinkWithActionModule
    ),
});
routes.push({
  path: 'linkWithIcon',
  loadChildren: () =>
    import('./views/link/link-with-icon/link-with-icon.module').then(
      (m) => m.LinkWithIconModule
    ),
});
routes.push({
  path: 'undecoratedLinkWithNewWindow',
  loadChildren: () =>
    import(
      './views/link/undecorated-link-with-new-window/undecorated-link-with-new-window.module'
    ).then((m) => m.UndecoratedLinkWithNewWindowModule),
});

//Number input
routes.push({
  path: 'controlledNumber',
  loadChildren: () =>
    import(
      './views/number-input/controlled-number/controlled-number.module'
    ).then((m) => m.ControlledNumberModule),
});
routes.push({
  path: 'customErrorNumber',
  loadChildren: () =>
    import(
      './views/number-input/custom-error-number/custom-error-number.module'
    ).then((m) => m.CustomErrorNumberModule),
});
routes.push({
  path: 'disabledNumber',
  loadChildren: () =>
    import('./views/number-input/disabled-number/disabled-number.module').then(
      (m) => m.DisabledNumberModule
    ),
});
routes.push({
  path: 'fillParentSizeNumber',
  loadChildren: () =>
    import(
      './views/number-input/fill-parent-size-number/fill-parent-size-number.module'
    ).then((m) => m.FillParentSizeNumberModule),
});
routes.push({
  path: 'helperTextNumber',
  loadChildren: () =>
    import(
      './views/number-input/helper-text-number/helper-text-number.module'
    ).then((m) => m.HelperTextNumberModule),
});
routes.push({
  path: 'invalidNumber',
  loadChildren: () =>
    import('./views/number-input/invalid-number/invalid-number.module').then(
      (m) => m.InvalidNumberModule
    ),
});
routes.push({
  path: 'minMaxStepNumber',
  loadChildren: () =>
    import(
      './views/number-input/min-max-step-number/min-max-step-number.module'
    ).then((m) => m.MinMaxStepNumberModule),
});
routes.push({
  path: 'optionalNumber',
  loadChildren: () =>
    import('./views/number-input/optional-number/optional-number.module').then(
      (m) => m.OptionalNumberModule
    ),
});
routes.push({
  path: 'placeholderNumber',
  loadChildren: () =>
    import(
      './views/number-input/placeholder-number/placeholder-number.module'
    ).then((m) => m.PlaceholderNumberModule),
});
routes.push({
  path: 'prefixNumber',
  loadChildren: () =>
    import('./views/number-input/preffix-number/preffix-number.module').then(
      (m) => m.PreffixNumberModule
    ),
});
routes.push({
  path: 'suffixNumber',
  loadChildren: () =>
    import('./views/number-input/suffix-number/suffix-number.module').then(
      (m) => m.SuffixNumberModule
    ),
});
routes.push({
  path: 'uncontrolledNumber',
  loadChildren: () =>
    import(
      './views/number-input/uncontrolled-number/uncontrolled-number.module'
    ).then((m) => m.UncontrolledNumberModule),
});

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
routes.push({
  path: 'v3ControlledSelect',
  loadChildren: () =>
    import(
      './views/v3-select/v3-controlled-select/v3-controlled-select.module'
    ).then((m) => m.V3ControlledSelectModule),
});
routes.push({
  path: 'v3MultipleSelect',
  loadChildren: () =>
    import(
      './views/v3-select/v3-multiple-select/v3-multiple-select.module'
    ).then((m) => m.V3MultipleSelectModule),
});
routes.push({
  path: 'v3SizedSelect',
  loadChildren: () =>
    import('./views/v3-select/v3-sized-select/v3-sized-select.module').then(
      (m) => m.V3SizedSelectModule
    ),
});
routes.push({
  path: 'v3UncontrolledSelect',
  loadChildren: () =>
    import(
      './views/v3-select/v3-uncontrolled-select/v3-uncontrolled-select.module'
    ).then((m) => m.V3UncontrolledSelectModule),
});
routes.push({
  path: 'v3WithIconsSelect',
  loadChildren: () =>
    import(
      './views/v3-select/v3-with-icons-select/v3-with-icons-select.module'
    ).then((m) => m.V3WithIconsSelectModule),
});

// //V3 Textarea
routes.push({
  path: 'v3ControlledTextarea',
  loadChildren: () =>
    import(
      './views/v3-textarea/v3-controlled-textarea/v3-controlled-textarea.module'
    ).then((m) => m.V3ControlledTextareaModule),
});
routes.push({
  path: 'v3DisabledTextarea',
  loadChildren: () =>
    import(
      './views/v3-textarea/v3-disabled-textarea/v3-disabled-textarea.module'
    ).then((m) => m.V3DisabledTextareaModule),
});
routes.push({
  path: 'v3FillParentTextarea',
  loadChildren: () =>
    import(
      './views/v3-textarea/v3-fill-parent-textarea/v3-fill-parent-textarea.module'
    ).then((m) => m.V3FillParentTextareaModule),
});
routes.push({
  path: 'v3InvalidTextarea',
  loadChildren: () =>
    import(
      './views/v3-textarea/v3-invalid-textarea/v3-invalid-textarea.module'
    ).then((m) => m.V3InvalidTextareaModule),
});
routes.push({
  path: 'v3RequiredTextarea',
  loadChildren: () =>
    import(
      './views/v3-textarea/v3-required-textarea/v3-required-textarea.module'
    ).then((m) => m.V3RequiredTextareaModule),
});
routes.push({
  path: 'v3UncontrolledTextarea',
  loadChildren: () =>
    import(
      './views/v3-textarea/v3-uncontrolled-textarea/v3-uncontrolled-textarea.module'
    ).then((m) => m.V3UncontrolledTextareaModule),
});

// //Select
routes.push({
  path: 'defaultSelect',
  loadChildren: () =>
    import('./views/select/default-select/default-select.module').then(
      (m) => m.DefaultSelectModule
    ),
});
routes.push({
  path: 'disabledSelect',
  loadChildren: () =>
    import('./views/select/disabled-select/disabled-select.module').then(
      (m) => m.DisabledSelectModule
    ),
});
routes.push({
  path: 'errorMultipleSelect',
  loadChildren: () =>
    import(
      './views/select/error-multiple-select/error-multiple-select.module'
    ).then((m) => m.ErrorMultipleSelectModule),
});
routes.push({
  path: 'errorSelect',
  loadChildren: () =>
    import('./views/select/error-select/error-select.module').then(
      (m) => m.ErrorSelectModule
    ),
});
routes.push({
  path: 'multipleSelect',
  loadChildren: () =>
    import('./views/select/multiple-select/multiple-select.module').then(
      (m) => m.MultipleSelectModule
    ),
});
routes.push({
  path: 'searchableSelect',
  loadChildren: () =>
    import('./views/select/searchable-select/searchable-select.module').then(
      (m) => m.SearchableSelectModule
    ),
});

// Hi Jiale and Aida
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
