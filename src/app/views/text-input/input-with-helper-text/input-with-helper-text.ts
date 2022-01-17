import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InputWithHelperTextModule } from './input-with-helper-text.module';
platformBrowserDynamic().bootstrapModule(InputWithHelperTextModule)
  .catch(err => console.error(err));
