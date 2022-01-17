import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DisabledDateInputModule } from './disabled-date-input.module';
platformBrowserDynamic().bootstrapModule(DisabledDateInputModule)
  .catch(err => console.error(err));
