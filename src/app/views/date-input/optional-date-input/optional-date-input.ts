import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { OptionalDateInputModule } from './optional-date-input.module';
platformBrowserDynamic().bootstrapModule(OptionalDateInputModule)
  .catch(err => console.error(err));
