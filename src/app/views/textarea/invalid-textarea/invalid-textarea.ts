import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InvalidTextareaModule } from './invalid-textarea.module';
platformBrowserDynamic().bootstrapModule(InvalidTextareaModule)
  .catch(err => console.error(err));
