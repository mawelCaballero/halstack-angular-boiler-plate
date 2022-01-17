
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { OptionalNumberModule } from './optional-number.module';
platformBrowserDynamic().bootstrapModule(OptionalNumberModule)
.catch(err => console.error(err));
