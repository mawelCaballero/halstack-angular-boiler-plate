import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ControlledTextareaModule } from './controlled-textarea.module';
platformBrowserDynamic().bootstrapModule(ControlledTextareaModule)
  .catch(err => console.error(err));
