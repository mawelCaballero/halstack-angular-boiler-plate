
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DisabledNumberModule } from './disabled-number.module';
platformBrowserDynamic().bootstrapModule(DisabledNumberModule)
  .catch(err => console.error(err));
