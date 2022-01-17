
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HeaderWithDropdownModule } from './header-with-dropdown.module';
platformBrowserDynamic().bootstrapModule(HeaderWithDropdownModule)
  .catch(err => console.error(err));
