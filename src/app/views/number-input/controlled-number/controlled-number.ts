
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ControlledNumberModule } from './controlled-number.module';
platformBrowserDynamic().bootstrapModule(ControlledNumberModule)
  .catch(err => console.error(err));
