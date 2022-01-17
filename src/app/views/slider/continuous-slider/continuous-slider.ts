import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ContinuousSliderModule } from './continuous-slider.module';
platformBrowserDynamic().bootstrapModule(ContinuousSliderModule)
  .catch(err => console.error(err));
