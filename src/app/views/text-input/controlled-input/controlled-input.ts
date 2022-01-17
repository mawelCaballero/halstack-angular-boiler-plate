import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ControlledInputModule } from './controlled-input.module';
platformBrowserDynamic().bootstrapModule(ControlledInputModule)
  .catch(err => console.error(err));
