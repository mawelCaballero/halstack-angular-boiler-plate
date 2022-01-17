
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DisabledLinkModule } from './disabled-link.module';
platformBrowserDynamic().bootstrapModule(DisabledLinkModule)
  .catch(err => console.error(err));
