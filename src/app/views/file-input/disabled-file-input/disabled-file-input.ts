import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DisabledFileInputModule } from './disabled-file-input.module';
platformBrowserDynamic().bootstrapModule(DisabledFileInputModule)
  .catch(err => console.error(err));
