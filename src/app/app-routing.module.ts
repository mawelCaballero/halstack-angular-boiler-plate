import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ButtonModesComponent } from './button/button-modes/button-modes.component';
import { ButtonWithIconComponent } from './button/button-with-icon/button-with-icon.component';

let routes: Routes = [];
routes.push({ path: '', redirectTo: 'buttonModes', pathMatch: 'full' }),
routes.push({ path: 'buttonModes', component: ButtonModesComponent }),
routes.push({ path: 'buttonWithIcon', component: ButtonWithIconComponent });

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
