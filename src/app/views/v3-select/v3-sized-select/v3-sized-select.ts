import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { V3SizedSelectModule } from './v3-sized-select.module';
platformBrowserDynamic().bootstrapModule(V3SizedSelectModule)
  .catch(err => console.error(err));
