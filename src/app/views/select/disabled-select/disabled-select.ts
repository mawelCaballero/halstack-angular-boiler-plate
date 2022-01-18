import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DisabledSelectModule } from './disabled-select.module';
platformBrowserDynamic().bootstrapModule(DisabledSelectModule)
  .catch(err => console.error(err));
