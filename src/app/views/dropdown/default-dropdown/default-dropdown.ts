import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DefaultDropdownModule } from './default-dropdown.module';
platformBrowserDynamic().bootstrapModule(DefaultDropdownModule)
  .catch(err => console.error(err));
