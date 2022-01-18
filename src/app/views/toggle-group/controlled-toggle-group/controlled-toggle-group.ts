import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ControlledToggleGroupModule } from './controlled-toggle-group.module';
platformBrowserDynamic().bootstrapModule(ControlledToggleGroupModule)
  .catch(err => console.error(err));
