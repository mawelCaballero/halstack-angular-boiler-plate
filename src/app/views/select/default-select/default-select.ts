import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DefaultSelectModule } from './default-select.module';
platformBrowserDynamic().bootstrapModule(DefaultSelectModule)
  .catch(err => console.error(err));
