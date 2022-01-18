import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TextareaWithHelperTextModule } from './textarea-with-helper-text.module';
platformBrowserDynamic().bootstrapModule(TextareaWithHelperTextModule)
  .catch(err => console.error(err));
