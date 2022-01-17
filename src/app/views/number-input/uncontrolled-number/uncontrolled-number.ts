
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UncontrolledNumberModule } from './uncontrolled-number.module';
platformBrowserDynamic().bootstrapModule(UncontrolledNumberModule)
.catch(err => console.error(err));
