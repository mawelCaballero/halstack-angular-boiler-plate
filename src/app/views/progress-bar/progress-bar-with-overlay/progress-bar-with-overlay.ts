import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProgressBarWithOverlayModule } from './progress-bar-with-overlay.module';
platformBrowserDynamic().bootstrapModule(ProgressBarWithOverlayModule)
  .catch(err => console.error(err));
