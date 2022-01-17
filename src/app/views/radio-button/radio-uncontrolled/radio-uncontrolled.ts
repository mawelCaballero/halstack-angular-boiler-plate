import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RadioUncontrolledModule } from './radio-uncontrolled.module';
platformBrowserDynamic().bootstrapModule(RadioUncontrolledModule)
  .catch(err => console.error(err));
