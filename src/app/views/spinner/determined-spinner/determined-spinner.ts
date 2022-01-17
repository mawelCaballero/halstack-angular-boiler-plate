import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DeterminedSpinnerModule } from './determined-spinner.module';
platformBrowserDynamic().bootstrapModule(DeterminedSpinnerModule)
  .catch(err => console.error(err));
