import { Component } from '@angular/core';
import { ThemeDirective } from '@dxc-technology/halstack-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [ThemeDirective]

})
export class AppComponent {

  constructor(){}

  title = 'boiler-plate';

  onClick = (event) => {

    console.log(event);
  }
}
