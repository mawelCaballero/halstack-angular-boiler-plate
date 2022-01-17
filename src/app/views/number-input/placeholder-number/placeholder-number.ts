
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaceholderNumberModule } from './placeholder-number.module';
platformBrowserDynamic().bootstrapModule(PlaceholderNumberModule)
.catch(err => console.error(err));
