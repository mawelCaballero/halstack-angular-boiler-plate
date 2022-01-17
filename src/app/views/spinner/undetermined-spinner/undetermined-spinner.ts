import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UndeterminedSpinnerModule } from './undetermined-spinner.module';
platformBrowserDynamic().bootstrapModule(UndeterminedSpinnerModule)
  .catch(err => console.error(err));
