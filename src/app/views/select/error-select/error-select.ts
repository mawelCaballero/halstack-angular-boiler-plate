import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ErrorSelectModule } from './error-select.module';
platformBrowserDynamic().bootstrapModule(ErrorSelectModule)
  .catch(err => console.error(err));
