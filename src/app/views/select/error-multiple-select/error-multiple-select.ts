import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ErrorMultipleSelectModule } from './error-multiple-select.module';
platformBrowserDynamic().bootstrapModule(ErrorMultipleSelectModule)
  .catch(err => console.error(err));
