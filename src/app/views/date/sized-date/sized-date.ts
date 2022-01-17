import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SizedDateModule } from './sized-date.module';
platformBrowserDynamic().bootstrapModule(SizedDateModule)
  .catch(err => console.error(err));
