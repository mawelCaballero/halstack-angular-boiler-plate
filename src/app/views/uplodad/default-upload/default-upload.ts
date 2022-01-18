import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DefaultUploadModule } from './default-upload.module';
platformBrowserDynamic().bootstrapModule(DefaultUploadModule)
  .catch(err => console.error(err));
