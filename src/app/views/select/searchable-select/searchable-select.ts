import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SearchableSelectModule } from './searchable-select.module';
platformBrowserDynamic().bootstrapModule(SearchableSelectModule)
  .catch(err => console.error(err));
