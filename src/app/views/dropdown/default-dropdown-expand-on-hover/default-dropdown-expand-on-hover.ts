import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DefaultDropdownExpandOnHoverModule } from './default-dropdown-expand-on-hover.module';
platformBrowserDynamic().bootstrapModule(DefaultDropdownExpandOnHoverModule)
  .catch(err => console.error(err));
