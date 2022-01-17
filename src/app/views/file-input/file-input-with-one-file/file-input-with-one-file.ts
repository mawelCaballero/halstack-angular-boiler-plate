import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FileInputWithOneFileModule } from './file-input-with-one-file.module';
platformBrowserDynamic().bootstrapModule(FileInputWithOneFileModule)
  .catch(err => console.error(err));
