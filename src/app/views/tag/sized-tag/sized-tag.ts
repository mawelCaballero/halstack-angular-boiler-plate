import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SizedTagModule } from './sized-tag.module';
platformBrowserDynamic().bootstrapModule(SizedTagModule)
  .catch(err => console.error(err));
