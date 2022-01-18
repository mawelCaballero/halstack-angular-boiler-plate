import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { V3DisabledTextareaModule } from './v3-disabled-textarea.module';
platformBrowserDynamic().bootstrapModule(V3DisabledTextareaModule)
  .catch(err => console.error(err));
