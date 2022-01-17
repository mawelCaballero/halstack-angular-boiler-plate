import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TagWithIconModule } from './tag-with-icon.module';
platformBrowserDynamic().bootstrapModule(TagWithIconModule)
  .catch(err => console.error(err));
