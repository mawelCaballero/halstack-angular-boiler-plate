
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CustomErrorNumberComponent } from './custom-error-number.component';
platformBrowserDynamic().bootstrapModule(CustomErrorNumberComponent)
  .catch(err => console.error(err));
