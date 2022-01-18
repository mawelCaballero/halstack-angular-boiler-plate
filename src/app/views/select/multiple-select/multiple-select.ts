import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MultipleSelectModule } from './multiple-select.module';
platformBrowserDynamic().bootstrapModule(MultipleSelectModule)
  .catch(err => console.error(err));
