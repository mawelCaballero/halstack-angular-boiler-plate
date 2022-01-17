import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SizedSliderModule } from './sized-slider.module';
platformBrowserDynamic().bootstrapModule(SizedSliderModule)
  .catch(err => console.error(err));
