import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UncontrolledPasswordModule } from './uncontrolled-password.module';
platformBrowserDynamic().bootstrapModule(UncontrolledPasswordModule)
  .catch(err => console.error(err));
