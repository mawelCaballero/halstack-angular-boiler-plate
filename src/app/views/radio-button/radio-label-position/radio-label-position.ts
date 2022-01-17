import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RadioLabelPositionModule } from './radio-label-position.module';
platformBrowserDynamic().bootstrapModule(RadioLabelPositionModule)
  .catch(err => console.error(err));
