
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MinMaxStepNumberModule } from './min-max-step-number.module';
platformBrowserDynamic().bootstrapModule(MinMaxStepNumberModule)
.catch(err => console.error(err));
