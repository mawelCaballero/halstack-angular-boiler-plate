import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SizedInputTextModule } from './sized-input-text.module';
platformBrowserDynamic().bootstrapModule(SizedInputTextModule)
  .catch(err => console.error(err));
