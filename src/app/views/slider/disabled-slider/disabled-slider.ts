import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DisabledSliderModule } from './disabled-slider.module';
platformBrowserDynamic().bootstrapModule(DisabledSliderModule)
  .catch(err => console.error(err));
