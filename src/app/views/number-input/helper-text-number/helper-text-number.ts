
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HelperTextNumberModule } from './helper-text-number.module';
platformBrowserDynamic().bootstrapModule(HelperTextNumberModule)
.catch(err => console.error(err));
