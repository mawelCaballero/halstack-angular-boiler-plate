
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PreffixNumberModule } from './preffix-number.module';
platformBrowserDynamic().bootstrapModule(PreffixNumberModule)
.catch(err => console.error(err));
