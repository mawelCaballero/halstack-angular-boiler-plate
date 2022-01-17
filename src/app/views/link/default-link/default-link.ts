
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DefaultLinkModule } from './default-link.module';
platformBrowserDynamic().bootstrapModule(DefaultLinkModule)
  .catch(err => console.error(err));
