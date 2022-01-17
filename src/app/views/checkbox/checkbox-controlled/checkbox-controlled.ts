import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CheckboxControlledModule } from './checkbox-controlled.module';
platformBrowserDynamic().bootstrapModule(CheckboxControlledModule)
  .catch(err => console.error(err));
