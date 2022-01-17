
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ControlledInputTextModule } from './controlled-input-text.module';
platformBrowserDynamic().bootstrapModule(ControlledInputTextModule)
  .catch(err => console.error(err));
