import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TagWithLinkModule } from './tag-with-link.module';
platformBrowserDynamic().bootstrapModule(TagWithLinkModule)
  .catch(err => console.error(err));
