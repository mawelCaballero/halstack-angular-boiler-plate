
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DefaultHeadingsModule } from './default-headings.module';
platformBrowserDynamic().bootstrapModule(DefaultHeadingsModule)
  .catch(err => console.error(err));
