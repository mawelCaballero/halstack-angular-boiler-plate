import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DiscreteSliderModule } from './discrete-slider.module';
platformBrowserDynamic().bootstrapModule(DiscreteSliderModule)
  .catch(err => console.error(err));
