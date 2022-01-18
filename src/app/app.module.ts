import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxcButtonModule, ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';
import { CommonModule } from '@angular/common';
import { ButtonModesComponent } from './views/button/button-modes/button-modes.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from './views/button/button.module';
import { AutosuggestModule } from './views/autosuggest/autosuggest.module';
import { CheckboxModule } from './views/checkbox/checkbox.module';
import { DateModule } from './views/date/date.module';
import { DateInputModule } from './views/date-input/date-input.module';
import { DialogModule } from './views/dialog/dialog.module';
import { DropdownModule } from './views/dropdown/dropdown.module';
import { FileInputModule } from './views/file-input/file-input.module';
import { HeaderModule } from './views/header/header.module';
import { HeadingModule } from './views/heading/heading.module';
import { InputTextModule } from './views/input-text/input-text.module';
import { FooterModule } from './views/footer/footer.module';
import { LinkModule } from './views/link/link.module';
import { NumberInputModule } from './views/number-input/number-input.module';
import { PaginatorModule } from './views/paginator/paginator.module';
import { PasswordInputModule } from './views/password-input/password-input.module';
import { ProgressBarModule } from './views/progress-bar/progress-bar.module';
import { RadioButtonModule } from './views/radio-button/radio-button.module';
import { ResultsetTableModule } from './views/resultset-table/resultset-table.module';
import { SidenavModule } from './views/sidenav/sidenav.module';
import { SliderModule } from './views/slider/slider.module';
import { SpinnerModule } from './views/spinner/spinner.module';
import { SwitchModule } from './views/switch/switch.module';
import { TabbedSectionModule } from './views/tabbed-section/tabbed-section.module';
import { TableModule } from './views/table/table.module';
import { TabsModule } from './views/tabs/tabs.module';
import { TagModule } from './views/tag/tag.module';
import { TextInputModule } from './views/text-input/text-input.module';
import { TextareaModule } from './views/textarea/textarea.module';
import { ToggleGroupModule } from './views/toggle-group/toggle-group.module';
import { UplodadModule } from './views/uplodad/uplodad.module';
import { V3SelectModule } from './views/v3-select/v3-select.module';
import { V3TextareaModule } from './views/v3-textarea/v3-textarea.module';
import { WizardModule } from './views/wizard/wizard.module';
import { SelectModule } from './views/select/select.module';

@NgModule({
  declarations: [
    AppComponent  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    ButtonModule,
    DateModule,
    DateInputModule,
    CheckboxModule,
    AutosuggestModule,
    DialogModule,
    DropdownModule,
    FileInputModule,
    FooterModule,
    HeaderModule,
    HeadingModule,
    InputTextModule,
    LinkModule,
    NumberInputModule,
    PaginatorModule,
    PasswordInputModule,
    ProgressBarModule,
    RadioButtonModule,
    ResultsetTableModule,
    SidenavModule,
    SliderModule,
    SpinnerModule,
    SwitchModule,
    TabbedSectionModule,
    TableModule,
    TabsModule,
    TagModule,
    TextInputModule,
    TextareaModule,
    ToggleGroupModule,
    UplodadModule,
    V3SelectModule,
    V3TextareaModule,
    WizardModule,
    SelectModule,
    ThemeModule
  ],
  providers: [ { provide: 'ThemeService', useClass: ThemeService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
