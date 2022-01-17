
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DefaultHeaderModule } from './default-header.module';
platformBrowserDynamic().bootstrapModule(DefaultHeaderModule)
  .catch(err => console.error(err));
