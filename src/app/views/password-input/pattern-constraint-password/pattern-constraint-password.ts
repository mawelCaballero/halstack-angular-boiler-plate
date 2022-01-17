import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PatternConstraintPasswordModule } from './pattern-constraint-password.module';
platformBrowserDynamic().bootstrapModule(PatternConstraintPasswordModule)
  .catch(err => console.error(err));
