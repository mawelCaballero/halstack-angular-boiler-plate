import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InputWithCustomErrorModule } from './input-with-custom-error.module';
platformBrowserDynamic().bootstrapModule(InputWithCustomErrorModule)
  .catch(err => console.error(err));
