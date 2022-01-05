import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DxcButtonModule, ThemeModule, ThemeService } from '@dxc-technology/halstack-angular';
import { CommonModule } from '@angular/common';
import { ButtonModesComponent } from './button/button-modes/button-modes.component';
import { RouterModule } from '@angular/router';
import { ButtonWithIconModule } from './button/button-with-icon/button-with-icon.module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonModesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    DxcButtonModule,
    ButtonWithIconModule,
    ThemeModule
  ],
  providers: [ { provide: 'ThemeService', useClass: ThemeService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
