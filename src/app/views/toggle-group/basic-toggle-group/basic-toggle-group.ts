import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BasicToggleGroupModule } from './basic-toggle-group.module';
platformBrowserDynamic().bootstrapModule(BasicToggleGroupModule)
  .catch(err => console.error(err));
