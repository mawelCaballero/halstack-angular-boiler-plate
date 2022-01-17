import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ControlledDateInputModule } from './controlled-date-input.module';
platformBrowserDynamic().bootstrapModule(ControlledDateInputModule)
  .catch(err => console.error(err));
