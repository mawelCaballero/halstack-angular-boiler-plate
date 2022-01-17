import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BasicTagModule } from './basic-tag.module';
platformBrowserDynamic().bootstrapModule(BasicTagModule)
  .catch(err => console.error(err));
