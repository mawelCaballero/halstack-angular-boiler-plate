import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FileInputWithPreviewModule } from './file-input-with-preview.module';
platformBrowserDynamic().bootstrapModule(FileInputWithPreviewModule)
  .catch(err => console.error(err));
