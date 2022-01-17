import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DateWithHelperModule } from './date-with-helper.module';
platformBrowserDynamic().bootstrapModule(DateWithHelperModule)
  .catch(err => console.error(err));
