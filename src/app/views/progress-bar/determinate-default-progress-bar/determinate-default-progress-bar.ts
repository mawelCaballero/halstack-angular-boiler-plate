import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DeterminateDefaultProgressBarModule } from './determinate-default-progress-bar.module';
platformBrowserDynamic().bootstrapModule(DeterminateDefaultProgressBarModule)
  .catch(err => console.error(err));
