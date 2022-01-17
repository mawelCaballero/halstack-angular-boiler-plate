import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RadioControlledModule } from './radio-controlled.module';
platformBrowserDynamic().bootstrapModule(RadioControlledModule)
  .catch(err => console.error(err));
