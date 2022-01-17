import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InvalidDateInputModule } from './invalid-date-input.module';
platformBrowserDynamic().bootstrapModule(InvalidDateInputModule)
  .catch(err => console.error(err));
