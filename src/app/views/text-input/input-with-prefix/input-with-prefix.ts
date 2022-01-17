import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InputWithPrefixModule } from './input-with-prefix.module';
platformBrowserDynamic().bootstrapModule(InputWithPrefixModule)
  .catch(err => console.error(err));
