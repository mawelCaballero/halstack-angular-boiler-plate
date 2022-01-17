import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LabelPositionSwitchModule } from './label-position-switch.module';
platformBrowserDynamic().bootstrapModule(LabelPositionSwitchModule)
  .catch(err => console.error(err));
