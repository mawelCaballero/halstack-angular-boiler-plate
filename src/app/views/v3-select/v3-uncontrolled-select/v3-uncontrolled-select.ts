import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { V3UncontrolledSelectModule } from './v3-uncontrolled-select.module';
platformBrowserDynamic().bootstrapModule(V3UncontrolledSelectModule)
  .catch(err => console.error(err));
