import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TabsWithContentModule } from './tabs-with-content.module';
platformBrowserDynamic().bootstrapModule(TabsWithContentModule)
  .catch(err => console.error(err));
