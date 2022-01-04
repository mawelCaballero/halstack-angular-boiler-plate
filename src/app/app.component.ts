import { Component, Inject } from '@angular/core';
import { ThemeDirective, ThemeService } from '@dxc-technology/halstack-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {}

  title = 'boiler-plate';

}
