import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { V3ControlledSelectComponent } from './v3-controlled-select.component';
platformBrowserDynamic().bootstrapModule(V3ControlledSelectComponent)
  .catch(err => console.error(err));
