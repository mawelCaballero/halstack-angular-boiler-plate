
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CustomHeaderModule } from './custom-header.module';
platformBrowserDynamic().bootstrapModule(CustomHeaderModule)
  .catch(err => console.error(err));
