import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ControlledTabsModule } from './controlled-tabs.module';
platformBrowserDynamic().bootstrapModule(ControlledTabsModule)
  .catch(err => console.error(err));
