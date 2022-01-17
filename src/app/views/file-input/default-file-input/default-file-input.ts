import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DefaultFileInputModule } from './default-file-input.module';
platformBrowserDynamic().bootstrapModule(DefaultFileInputModule)
  .catch(err => console.error(err));
