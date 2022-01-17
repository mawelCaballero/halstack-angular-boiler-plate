import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UndeterminateDefaultProgressBarModule } from './undeterminate-default-progress-bar.module';
platformBrowserDynamic().bootstrapModule(UndeterminateDefaultProgressBarModule)
  .catch(err => console.error(err));
