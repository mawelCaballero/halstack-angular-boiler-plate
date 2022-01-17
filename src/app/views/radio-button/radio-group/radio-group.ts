import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RadioGroupModule } from './radio-group.module';
platformBrowserDynamic().bootstrapModule(RadioGroupModule)
  .catch(err => console.error(err));
