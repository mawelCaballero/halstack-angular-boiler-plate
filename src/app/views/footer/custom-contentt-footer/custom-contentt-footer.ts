

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CustomContenttFooterModule } from './custom-contentt-footer.module';
platformBrowserDynamic().bootstrapModule(CustomContenttFooterModule)
  .catch(err => console.error(err));
