import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LengthConstraintPasswordModule } from './length-constraint-password.module';
platformBrowserDynamic().bootstrapModule(LengthConstraintPasswordModule)
  .catch(err => console.error(err));
