import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { V3WithIconsSelectModule } from './v3-with-icons-select.module';
platformBrowserDynamic().bootstrapModule(V3WithIconsSelectModule)
  .catch(err => console.error(err));
