import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ControlledSwitchModule } from './controlled-switch.module';
platformBrowserDynamic().bootstrapModule(ControlledSwitchModule)
  .catch(err => console.error(err));
