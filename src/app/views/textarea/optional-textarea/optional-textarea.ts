import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { OptionalTextareaModule } from './optional-textarea.module';
platformBrowserDynamic().bootstrapModule(OptionalTextareaModule)
  .catch(err => console.error(err));
