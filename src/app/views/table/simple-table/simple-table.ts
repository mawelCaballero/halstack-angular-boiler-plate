import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SimpleTableModule } from './simple-table.module';
platformBrowserDynamic().bootstrapModule(SimpleTableModule)
  .catch(err => console.error(err));
