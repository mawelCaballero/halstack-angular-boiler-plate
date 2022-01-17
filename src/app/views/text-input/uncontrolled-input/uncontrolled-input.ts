import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UncontrolledInputModule } from './uncontrolled-input.module';
platformBrowserDynamic().bootstrapModule(UncontrolledInputModule)
  .catch(err => console.error(err));
