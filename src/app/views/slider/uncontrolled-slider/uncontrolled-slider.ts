import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UncontrolledSliderModule } from './uncontrolled-slider.module';
platformBrowserDynamic().bootstrapModule(UncontrolledSliderModule)
  .catch(err => console.error(err));
