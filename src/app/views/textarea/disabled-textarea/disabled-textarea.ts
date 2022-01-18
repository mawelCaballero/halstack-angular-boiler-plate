import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DisabledTextareaModule } from './disabled-textarea.module';
platformBrowserDynamic().bootstrapModule(DisabledTextareaModule)
  .catch(err => console.error(err));
