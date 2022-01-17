import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SliderWithInputModule } from './slider-with-input.module';
platformBrowserDynamic().bootstrapModule(SliderWithInputModule)
  .catch(err => console.error(err));
