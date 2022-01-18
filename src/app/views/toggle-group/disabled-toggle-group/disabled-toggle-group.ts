import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DisabledToggleGroupModule } from './disabled-toggle-group.module';
platformBrowserDynamic().bootstrapModule(DisabledToggleGroupModule)
  .catch(err => console.error(err));
