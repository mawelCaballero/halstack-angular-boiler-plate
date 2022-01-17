import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CloseDialogModule } from './close-dialog.module';
platformBrowserDynamic().bootstrapModule(CloseDialogModule)
  .catch(err => console.error(err));
