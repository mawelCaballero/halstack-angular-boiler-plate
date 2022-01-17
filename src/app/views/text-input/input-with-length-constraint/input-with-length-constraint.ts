import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { InputWithLengthConstraintModule } from './input-with-length-constraint.module';
platformBrowserDynamic().bootstrapModule(InputWithLengthConstraintModule)
  .catch(err => console.error(err));
