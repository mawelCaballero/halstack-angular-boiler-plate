import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FillParentSizePasswordModule } from './fill-parent-size-password.module';
platformBrowserDynamic().bootstrapModule(FillParentSizePasswordModule)
  .catch(err => console.error(err));
