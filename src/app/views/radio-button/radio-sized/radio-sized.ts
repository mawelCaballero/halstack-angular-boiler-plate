import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RadioSizedModule } from './radio-sized.module';
platformBrowserDynamic().bootstrapModule(RadioSizedModule)
  .catch(err => console.error(err));
