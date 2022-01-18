import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TextareaWithPlaceholderModule } from './textarea-with-placeholder.module';
platformBrowserDynamic().bootstrapModule(TextareaWithPlaceholderModule)
  .catch(err => console.error(err));
