import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DefaultPaginatorModule } from './default-paginator.module';
platformBrowserDynamic().bootstrapModule(DefaultPaginatorModule)
  .catch(err => console.error(err));
