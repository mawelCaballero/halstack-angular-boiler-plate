import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { V3UncontrolledTextareaModule } from './v3-uncontrolled-textarea.module';
platformBrowserDynamic().bootstrapModule(V3UncontrolledTextareaModule)
  .catch(err => console.error(err));
