import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CustomErrorPasswordModule } from './custom-error-password.module';
platformBrowserDynamic().bootstrapModule(CustomErrorPasswordModule)
  .catch(err => console.error(err));
