import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AddTabsDynamicallyModule } from './add-tabs-dynamically.module';
platformBrowserDynamic().bootstrapModule(AddTabsDynamicallyModule)
  .catch(err => console.error(err));
