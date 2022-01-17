import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DefaultSidenavModule } from './default-sidenav.module';
platformBrowserDynamic().bootstrapModule(DefaultSidenavModule)
  .catch(err => console.error(err));
