import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UncontrolledSwitchModule } from './uncontrolled-switch.module';
platformBrowserDynamic().bootstrapModule(UncontrolledSwitchModule)
  .catch(err => console.error(err));
