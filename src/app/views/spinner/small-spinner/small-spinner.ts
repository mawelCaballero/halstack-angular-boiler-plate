import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SmallSpinnerModule } from './small-spinner.module';
platformBrowserDynamic().bootstrapModule(SmallSpinnerModule)
  .catch(err => console.error(err));
