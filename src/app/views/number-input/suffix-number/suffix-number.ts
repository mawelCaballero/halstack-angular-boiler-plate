
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SuffixNumberModule } from './suffix-number.module';
platformBrowserDynamic().bootstrapModule(SuffixNumberModule)
.catch(err => console.error(err));
