import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InputWithActionModule } from './input-with-action.module';
platformBrowserDynamic().bootstrapModule(InputWithActionModule)
  .catch(err => console.error(err));
