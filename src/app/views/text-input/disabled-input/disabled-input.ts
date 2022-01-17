import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DisabledInputModule } from './disabled-input.module';
platformBrowserDynamic().bootstrapModule(DisabledInputModule)
  .catch(err => console.error(err));
