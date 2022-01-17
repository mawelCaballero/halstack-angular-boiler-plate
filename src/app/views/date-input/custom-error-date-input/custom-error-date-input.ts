import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CustomErrorDateInputModule } from './custom-error-date-input.module';
platformBrowserDynamic().bootstrapModule(CustomErrorDateInputModule)
  .catch(err => console.error(err));
