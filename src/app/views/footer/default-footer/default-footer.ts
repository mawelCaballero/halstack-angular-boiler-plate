import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DefaultFooterModule } from './default-footer.module';
platformBrowserDynamic().bootstrapModule(DefaultFooterModule)
  .catch(err => console.error(err));
