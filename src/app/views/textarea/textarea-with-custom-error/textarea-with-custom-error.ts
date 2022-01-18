import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TextareaWithCustomErrorModule } from './textarea-with-custom-error.module';
platformBrowserDynamic().bootstrapModule(TextareaWithCustomErrorModule)
  .catch(err => console.error(err));
