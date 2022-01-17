import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InputWithPlaceholderModule } from './input-with-placeholder.module';
platformBrowserDynamic().bootstrapModule(InputWithPlaceholderModule)
  .catch(err => console.error(err));
