import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CheckboxLabelPositionModule } from './checkbox-label-position.module';
platformBrowserDynamic().bootstrapModule(CheckboxLabelPositionModule)
  .catch(err => console.error(err));
