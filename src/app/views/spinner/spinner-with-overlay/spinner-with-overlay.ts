import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SpinnerWithOverlayModule } from './spinner-with-overlay.module';
platformBrowserDynamic().bootstrapModule(SpinnerWithOverlayModule)
  .catch(err => console.error(err));
