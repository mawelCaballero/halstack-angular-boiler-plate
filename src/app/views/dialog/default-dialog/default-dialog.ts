import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DefaultDialogModule } from './default-dialog.module';
platformBrowserDynamic().bootstrapModule(DefaultDialogModule)
  .catch(err => console.error(err));
