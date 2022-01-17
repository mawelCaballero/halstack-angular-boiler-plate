import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FileInputModesModule } from './file-input-modes.module';
platformBrowserDynamic().bootstrapModule(FileInputModesModule)
  .catch(err => console.error(err));
