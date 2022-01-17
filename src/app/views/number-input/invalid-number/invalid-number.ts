
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InvalidNumberModule } from './invalid-number.module';
platformBrowserDynamic().bootstrapModule(InvalidNumberModule)
.catch(err => console.error(err));
