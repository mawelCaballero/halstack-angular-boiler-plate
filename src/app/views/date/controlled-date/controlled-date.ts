import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ControlledDateModule } from './controlled-date.module';
platformBrowserDynamic().bootstrapModule(ControlledDateModule)
  .catch(err => console.error(err));
