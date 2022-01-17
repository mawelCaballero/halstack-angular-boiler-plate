import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SizedButtonModule } from './sized-button.module';
platformBrowserDynamic().bootstrapModule(SizedButtonModule)
  .catch(err => console.error(err));
