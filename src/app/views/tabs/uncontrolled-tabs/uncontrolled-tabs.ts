import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UncontrolledTabsModule } from './uncontrolled-tabs.module';
platformBrowserDynamic().bootstrapModule(UncontrolledTabsModule)
  .catch(err => console.error(err));
