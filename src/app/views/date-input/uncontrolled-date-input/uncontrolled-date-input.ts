import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UncontrolledDateInputModule } from './uncontrolled-date-input.module';
platformBrowserDynamic().bootstrapModule(UncontrolledDateInputModule)
  .catch(err => console.error(err));
