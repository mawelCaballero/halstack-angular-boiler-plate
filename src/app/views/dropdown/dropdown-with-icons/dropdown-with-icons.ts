import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DropdownWithIconsModule } from './dropdown-with-icons.module';
platformBrowserDynamic().bootstrapModule(DropdownWithIconsModule)
  .catch(err => console.error(err));
