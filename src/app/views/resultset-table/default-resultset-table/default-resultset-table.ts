import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DefaultResultsetTableModule } from './default-resultset-table.module';
platformBrowserDynamic().bootstrapModule(DefaultResultsetTableModule)
  .catch(err => console.error(err));
