import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UncontrolledInputTextModule } from './uncontrolled-input-text.module';
platformBrowserDynamic().bootstrapModule(UncontrolledInputTextModule)
  .catch(err => console.error(err));
