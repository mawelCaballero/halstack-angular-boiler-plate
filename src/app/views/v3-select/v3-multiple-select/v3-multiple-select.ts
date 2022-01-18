import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { V3ControlledSelectModule } from '../v3-controlled-select/v3-controlled-select.module';
platformBrowserDynamic().bootstrapModule(V3ControlledSelectModule)
  .catch(err => console.error(err));
