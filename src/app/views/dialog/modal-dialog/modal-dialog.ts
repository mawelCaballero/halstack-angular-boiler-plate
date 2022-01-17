import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ModalDialogModule } from './modal-dialog.module';
platformBrowserDynamic().bootstrapModule(ModalDialogModule)
  .catch(err => console.error(err));
