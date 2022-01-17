import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InputWithSuffixModule } from './input-with-suffix.module';
platformBrowserDynamic().bootstrapModule(InputWithSuffixModule)
  .catch(err => console.error(err));
