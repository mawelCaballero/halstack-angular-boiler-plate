import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SliderNoLimitValuesModule } from './slider-no-limit-values.module';
platformBrowserDynamic().bootstrapModule(SliderNoLimitValuesModule)
  .catch(err => console.error(err));
