import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { V3RequiredTextareaModule } from './v3-required-textarea.module';
platformBrowserDynamic().bootstrapModule(V3RequiredTextareaModule)
  .catch(err => console.error(err));
