import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModesModule } from './views/button/button-modes/button-modes.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  declarations: [
    AppComponent  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    ButtonModesModule,
    AppRoutingModule,
    // ButtonModule,
    // DateModule,
    // DateInputModule,
    // CheckboxModule,
    // AutosuggestModule,
    // DialogModule,
    // DropdownModule,
    // FileInputModule,
    // FooterModule,
    // HeaderModule,
    // HeadingModule,
    // InputTextModule,
    // LinkModule,
    // NumberInputModule,
    // PaginatorModule,
    // PasswordInputModule,
    // ProgressBarModule,
    // RadioButtonModule,
    // ResultsetTableModule,
    // SidenavModule,
    // SliderModule,
    // SpinnerModule,
    // SwitchModule,
    // TabbedSectionModule,
    // TableModule,
    // TabsModule,
    // TagModule,
    // TextInputModule,
    // TextareaModule,
    // ToggleGroupModule,
    // UplodadModule,
    // V3SelectModule,
    // V3TextareaModule,
    // WizardModule,
    // SelectModule,
    ThemeModule
  ],
  providers: [ { provide: 'ThemeService', useClass: ThemeService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
