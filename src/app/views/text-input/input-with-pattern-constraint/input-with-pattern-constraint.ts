import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InputWithPatternConstraintModule } from './input-with-pattern-constraint.module';
platformBrowserDynamic().bootstrapModule(InputWithPatternConstraintModule)
  .catch(err => console.error(err));
