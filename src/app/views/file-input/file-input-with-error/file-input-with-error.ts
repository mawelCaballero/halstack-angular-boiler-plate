import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FileInputWithErrorModule } from './file-input-with-error.module';
platformBrowserDynamic().bootstrapModule(FileInputWithErrorModule)
  .catch(err => console.error(err));
