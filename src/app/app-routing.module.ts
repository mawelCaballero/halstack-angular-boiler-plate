import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonModesComponent } from './views/button/button-modes/button-modes.component';

let routes: Routes = [];
routes.push({ path: '', redirectTo: 'buttonModes', pathMatch: 'full' });
//Button
routes.push({ path: 'buttonModes',  component: ButtonModesComponent });
routes.push({ path: 'buttonWithIcon', loadChildren: () => import('./views/button/button-with-icon/button-with-icon.module').then(m => m.ButtonWithIconModule) });
routes.push({ path: 'sizedButton', loadChildren: () => import('./views/button/sized-button/sized-button.module').then(m => m.SizedButtonModule) });
routes.push({ path: 'fillParentButton', loadChildren: () => import('./views/button/fill-parent-button/fill-parent-button.module').then(m => m.FillParentButtonModule) });

//Autosuggest
routes.push({ path: 'autosuggestInput', loadChildren: () => import('./views/autosuggest/text-input-function-suggestions/text-input-function-suggestions.module').then(m => m.TextInputFunctionSuggestionsModule) });
routes.push({ path: 'autosuggest-function-input', loadChildren: () => import('./views/autosuggest/text-input-with-suggestions/text-input-with-suggestions.module').then(m => m.TextInputWithSuggestionsModule) });

//Checkbox
routes.push({ path: 'checkbox-controlled', loadChildren: () => import('./views/checkbox/checkbox-controlled/checkbox-controlled.module').then(m => m.CheckboxControlledModule) });
routes.push({ path: 'checkbox-label-position', loadChildren: () => import('./views/checkbox/checkbox-label-position/checkbox-label-position.module').then(m => m.CheckboxLabelPositionModule) });
routes.push({ path: 'checkbox-sized', loadChildren: () => import('./views/checkbox/checkbox-sized/checkbox-sized.module').then(m => m.CheckboxSizedModule)  });
routes.push({ path: 'checkbox-uncontrolled', loadChildren: () => import('./views/checkbox/checkbox-uncontrolled/checkbox-uncontrolled.module').then(m => m.CheckboxUncontrolledModule)  });

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

// Hi Jiale and Aida
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
