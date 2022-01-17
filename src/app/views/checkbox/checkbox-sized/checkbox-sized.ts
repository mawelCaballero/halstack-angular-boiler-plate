import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CheckboxSizedModule } from './checkbox-sized.module';
platformBrowserDynamic().bootstrapModule(CheckboxSizedModule)
  .catch(err => console.error(err));
