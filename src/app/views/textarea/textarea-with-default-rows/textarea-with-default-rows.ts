import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TextareaWithDefaultRowsModule } from './textarea-with-default-rows.module';
platformBrowserDynamic().bootstrapModule(TextareaWithDefaultRowsModule)
  .catch(err => console.error(err));
