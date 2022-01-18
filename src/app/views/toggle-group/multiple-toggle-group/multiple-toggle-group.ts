import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MultipleToggleGroupModule } from './multiple-toggle-group.module';
platformBrowserDynamic().bootstrapModule(MultipleToggleGroupModule)
  .catch(err => console.error(err));
