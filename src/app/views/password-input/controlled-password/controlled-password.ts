import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ControlledPasswordModule } from './controlled-password.module';
platformBrowserDynamic().bootstrapModule(ControlledPasswordModule)
  .catch(err => console.error(err));
