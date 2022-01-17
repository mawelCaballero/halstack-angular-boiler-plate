import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InvalidInputModule } from './invalid-input.module';
platformBrowserDynamic().bootstrapModule(InvalidInputModule)
  .catch(err => console.error(err));
