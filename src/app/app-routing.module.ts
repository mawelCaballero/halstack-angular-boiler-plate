import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonModesComponent } from './views/button/button-modes/button-modes.component';
import { ProgressBarWithOverlayModule } from './views/progress-bar/progress-bar-with-overlay/progress-bar-with-overlay.module';
import { RadioLabelPositionModule } from './views/radio-button/radio-label-position/radio-label-position.module';

let routes: Routes = [];
routes.push({
  path: 'accordionWithAssistiveText',
  loadChildren: () =>
    import(
      './views/accordion/accordion-with-assistive-text/accordion-with-assistive-text.module'
    ).then((m) => m.AccordionWithAssistiveTextModule),
});

routes.push({
  path: 'accordionWithIcon',
  loadChildren: () =>
    import(
      './views/accordion/accordion-with-icon/accordion-with-icon.module'
    ).then((m) => m.AccordionWithIconModule),
});

routes.push({
  path: 'controlledAccordion',
  loadChildren: () =>
    import(
      './views/accordion/controlled-accordion/controlled-accordion.module'
    ).then((m) => m.ControlledAccordionModule),
});

routes.push({
  path: 'defaultAccordion',
  loadChildren: () =>
    import('./views/accordion/default-accordion/default-accordion.module').then(
      (m) => m.DefaultAccordionModule
    ),
});

routes.push({
  path: 'disabledIconAccordion',
  loadChildren: () =>
    import('./views/accordion/disabled-icon/disabled-icon.module').then(
      (m) => m.DisabledIconModule
    ),
});

routes.push({
  path: 'controlledAccordionGroup',
  loadChildren: () =>
    import(
      './views/accordion-group/controlled-accordion-group/controlled-accordion-group.module'
    ).then((m) => m.ControlledAccordionGroupModule),
});

routes.push({
  path: 'uncontrolledAccordionGroup',
  loadChildren: () =>
    import(
      './views/accordion-group/uncontrolled-accordion-group/uncontrolled-accordion-group.module'
    ).then((m) => m.UncontrolledAccordionGroupModule),
});

routes.push({
  path: 'disabledAccordionGroup',
  loadChildren: () =>
    import(
      './views/accordion-group/disabled-accordion-group/disabled-accordion-group.module'
    ).then((m) => m.DisabledAccordionGroupModule),
});

routes.push({
  path: 'alertWithChildren',
  loadChildren: () =>
    import('./views/alert/alert-with-children/alert-with-children.module').then(
      (m) => m.AlertWithChildrenModule
    ),
});

routes.push({
  path: 'closableInlineAlert',
  loadChildren: () =>
    import(
      './views/alert/closable-inline-alert/closable-inline-alert.module'
    ).then((m) => m.ClosableInlineAlertModule),
});

routes.push({
  path: 'errorAlert',
  loadChildren: () =>
    import('./views/alert/error-alert/error-alert.module').then(
      (m) => m.ErrorAlertModule
    ),
});

routes.push({
  path: 'infoAlert',
  loadChildren: () =>
    import('./views/alert/info-alert/info-alert.module').then(
      (m) => m.InfoAlertModule
    ),
});

routes.push({
  path: 'modalAlert',
  loadChildren: () =>
    import('./views/alert/modal-alert/modal-alert.module').then(
      (m) => m.ModalAlertModule
    ),
});

routes.push({
  path: 'sizedAlert',
  loadChildren: () =>
    import('./views/alert/sized-alert/sized-alert.module').then(
      (m) => m.SizedAlertModule
    ),
});

routes.push({
  path: 'successAlert',
  loadChildren: () =>
    import('./views/alert/success-alert/success-alert.module').then(
      (m) => m.SuccessAlertModule
    ),
});

routes.push({
  path: 'warningAlert',
  loadChildren: () =>
    import('./views/alert/warning-alert/warning-alert.module').then(
      (m) => m.WarningAlertModule
    ),
});

routes.push({
  path: 'basicLayout',
  loadChildren: () =>
    import('./views/application-layout/basic-layout/basic-layout.module').then(
      (m) => m.BasicLayoutModule
    ),
});

routes.push({
  path: 'layoutWithSidenav',
  loadChildren: () =>
    import(
      './views/application-layout/layout-with-sidenav/layout-with-sidenav.module'
    ).then((m) => m.LayoutWithSidenavModule),
});

routes.push({
  path: 'basicBox',
  loadChildren: () =>
    import('./views/box/basic-box/basic-box.module').then(
      (m) => m.BasicBoxModule
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

//Card
routes.push({
  path: 'cardWithAction',
  loadChildren: () =>
    import('./views/card/card-with-action/card-with-action.module').then(
      (m) => m.CardWithActionModule
    ),
});

routes.push({
  path: 'cardWithLink',
  loadChildren: () =>
    import('./views/card/card-with-link/card-with-link.module').then(
      (m) => m.CardWithLinkModule
    ),
});

routes.push({
  path: 'defaultCard',
  loadChildren: () =>
    import('./views/card/default-card/default-card.module').then(
      (m) => m.DefaultCardModule
    ),
});

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
routes.push({
  path: 'defaultChip',
  loadChildren: () =>
    import('./views/chip/default-chip/default-chip.module').then(
      (m) => m.DefaultChipModule
    ),
});

routes.push({
  path: 'chipWithIcons',
  loadChildren: () =>
    import('./views/chip/chip-with-icons/chip-with-icons.module').then(
      (m) => m.ChipWithIconsModule
    ),
});

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

routes.push({
  path: 'defaultPaginator',
  loadChildren: () =>
    import('./views/paginator/paginator/default-paginator.module').then(
      (m) => m.DefaultPaginatorModule
    ),
});
// //Password
routes.push({
  path: 'controlledPassword',
  loadChildren: () =>
    import(
      './views/password-input/controlled-password/controlled-password.module'
    ).then((m) => m.ControlledPasswordModule),
});
routes.push({
  path: 'customErrorPassword',
  loadChildren: () =>
    import(
      './views/password-input/custom-error-password/custom-error-password.module'
    ).then((m) => m.CustomErrorPasswordModule),
});
routes.push({
  path: 'fillParentSizePassword',
  loadChildren: () =>
    import(
      './views/password-input/fill-parent-size-password/fill-parent-size-password.module'
    ).then((m) => m.FillParentSizePasswordModule),
});

routes.push({
  path: 'lengthConstraintPassword',
  loadChildren: () =>
    import(
      './views/password-input/length-constraint-password/length-constraint-password.module'
    ).then((m) => m.LengthConstraintPasswordModule),
});

routes.push({
  path: 'patternConstraintPassword',
  loadChildren: () =>
    import(
      './views/password-input/pattern-constraint-password/pattern-constraint-password.module'
    ).then((m) => m.PatternConstraintPasswordModule),
});

routes.push({
  path: 'uncontrolledPassword',
  loadChildren: () =>
    import(
      './views/password-input/uncontrolled-password/uncontrolled-password.module'
    ).then((m) => m.UncontrolledPasswordModule),
});

// //ProgressBar
routes.push({
  path: 'determinateDefaultProgressBar',
  loadChildren: () =>
    import(
      './views/progress-bar/determinate-default-progress-bar/determinate-default-progress-bar.module'
    ).then((m) => m.DeterminateDefaultProgressBarModule),
});

routes.push({
  path: 'progressBarWithOverlay',
  loadChildren: () =>
    import(
      './views/progress-bar/progress-bar-with-overlay/progress-bar-with-overlay.module'
    ).then((m) => m.ProgressBarWithOverlayModule),
});

routes.push({
  path: 'undeterminateDefaultProgressBar',
  loadChildren: () =>
    import(
      './views/progress-bar/undeterminate-default-progress-bar/undeterminate-default-progress-bar.module'
    ).then((m) => m.UndeterminateDefaultProgressBarModule),
});

// //RadioButton
routes.push({
  path: 'radioControlled',
  loadChildren: () =>
    import(
      './views/radio-button/radio-controlled/radio-controlled.module'
    ).then((m) => m.RadioControlledModule),
});
routes.push({
  path: 'radioGroup',
  loadChildren: () =>
    import('./views/radio-button/radio-group/radio-group.module').then(
      (m) => m.RadioGroupModule
    ),
});

routes.push({
  path: 'radioLabelPosition',
  loadChildren: () =>
    import(
      './views/radio-button/radio-label-position/radio-label-position.module'
    ).then((m) => m.RadioLabelPositionModule),
});

routes.push({
  path: 'radioSized',
  loadChildren: () =>
    import('./views/radio-button/radio-sized/radio-sized.module').then(
      (m) => m.RadioSizedModule
    ),
});

routes.push({
  path: 'radioUncontrolled',
  loadChildren: () =>
    import(
      './views/radio-button/radio-uncontrolled/radio-uncontrolled.module'
    ).then((m) => m.RadioUncontrolledModule),
});

// //Resultset Table
routes.push({
  path: 'defaultResultsetTable',
  loadChildren: () =>
    import(
      './views/resultset-table/default-resultset-table/default-resultset-table.module'
    ).then((m) => m.DefaultResultsetTableModule),
});

// //Sidenav
routes.push({
  path: 'default-sidenav',
  loadChildren: () =>
    import('./views/sidenav/default-sidenav/default-sidenav.module').then(
      (m) => m.DefaultSidenavModule
    ),
});

routes.push({
  path: 'sidenav-with-children',
  loadChildren: () =>
    import(
      './views/sidenav/sidenav-with-children/sidenav-with-children.module'
    ).then((m) => m.SidenavWithChildrenModule),
});

// //Slider

routes.push({
  path: 'continuous-slider',
  loadChildren: () =>
    import('./views/slider/continuous-slider/continuous-slider.module').then(
      (m) => m.ContinuousSliderModule
    ),
});

routes.push({
  path: 'controlled-slider',
  loadChildren: () =>
    import('./views/slider/controlled-slider/controlled-slider.module').then(
      (m) => m.ControlledSliderModule
    ),
});

routes.push({
  path: 'disabled-slider',
  loadChildren: () =>
    import('./views/slider/disabled-slider/disabled-slider.module').then(
      (m) => m.DisabledSliderModule
    ),
});

routes.push({
  path: 'discrete-slider',
  loadChildren: () =>
    import('./views/slider/discrete-slider/discrete-slider.module').then(
      (m) => m.DiscreteSliderModule
    ),
});

routes.push({
  path: 'sized-slider',
  loadChildren: () =>
    import('./views/slider/sized-slider/sized-slider.module').then(
      (m) => m.SizedSliderModule
    ),
});

routes.push({
  path: 'slider-no-limit-values',
  loadChildren: () =>
    import(
      './views/slider/slider-no-limit-values/slider-no-limit-values.module'
    ).then((m) => m.SliderNoLimitValuesModule),
});

routes.push({
  path: 'slider-with-input',
  loadChildren: () =>
    import('./views/slider/slider-with-input/slider-with-input.module').then(
      (m) => m.SliderWithInputModule
    ),
});

routes.push({
  path: 'uncontrolled-slider',
  loadChildren: () =>
    import(
      './views/slider/uncontrolled-slider/uncontrolled-slider.module'
    ).then((m) => m.UncontrolledSliderModule),
});

// //Spinner
routes.push({
  path: 'determined-spinner',
  loadChildren: () =>
    import('./views/spinner/determined-spinner/determined-spinner.module').then(
      (m) => m.DeterminedSpinnerModule
    ),
});
routes.push({
  path: 'small-spinner',
  loadChildren: () =>
    import('./views/spinner/small-spinner/small-spinner.module').then(
      (m) => m.SmallSpinnerModule
    ),
});
routes.push({
  path: 'spinner-with-overlay',
  loadChildren: () =>
    import(
      './views/spinner/spinner-with-overlay/spinner-with-overlay.module'
    ).then((m) => m.SpinnerWithOverlayModule),
});
routes.push({
  path: 'undetermined-spinner',
  loadChildren: () =>
    import(
      './views/spinner/undetermined-spinner/undetermined-spinner.module'
    ).then((m) => m.UndeterminedSpinnerModule),
});

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
