import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UncontrolledDateModule } from './uncontrolled-date.module';
platformBrowserDynamic().bootstrapModule(UncontrolledDateModule)
  .catch(err => console.error(err));
