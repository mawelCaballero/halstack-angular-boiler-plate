import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DefaultTabbedSectionModule } from './default-tabbed-section.module';
platformBrowserDynamic().bootstrapModule(DefaultTabbedSectionModule)
  .catch(err => console.error(err));
