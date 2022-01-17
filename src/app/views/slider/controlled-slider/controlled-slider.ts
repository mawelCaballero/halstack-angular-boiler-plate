import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ControlledSliderModule } from './controlled-slider.module';
platformBrowserDynamic().bootstrapModule(ControlledSliderModule)
  .catch(err => console.error(err));
