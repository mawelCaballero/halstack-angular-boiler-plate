import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UncontrolledTextareaModule } from './uncontrolled-textarea.module';
platformBrowserDynamic().bootstrapModule(UncontrolledTextareaModule)
  .catch(err => console.error(err));
