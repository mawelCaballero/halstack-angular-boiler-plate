
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ButtonWithIconModule } from './button-with-icon.module';
platformBrowserDynamic().bootstrapModule(ButtonWithIconModule)
  .catch(err => console.error(err));
