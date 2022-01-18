import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { V3ControlledTextareaModule } from './v3-controlled-textarea.module';
platformBrowserDynamic().bootstrapModule(V3ControlledTextareaModule)
  .catch(err => console.error(err));
