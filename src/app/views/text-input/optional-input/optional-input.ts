import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { OptionalInputModule } from './optional-input.module';
platformBrowserDynamic().bootstrapModule(OptionalInputModule)
  .catch(err => console.error(err));
