import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormattedDateInputModule } from './formatted-date-input.module';
platformBrowserDynamic().bootstrapModule(FormattedDateInputModule)
  .catch(err => console.error(err));
