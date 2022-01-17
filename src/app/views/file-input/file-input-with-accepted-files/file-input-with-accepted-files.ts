import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FileInputWithAcceptedFilesModule } from './file-input-with-accepted-files.module';
platformBrowserDynamic().bootstrapModule(FileInputWithAcceptedFilesModule)
  .catch(err => console.error(err));
