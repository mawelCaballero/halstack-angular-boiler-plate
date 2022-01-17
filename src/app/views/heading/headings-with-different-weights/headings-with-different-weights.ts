
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HeadingsWithDifferentWeightsModule } from './headings-with-different-weights.module';
platformBrowserDynamic().bootstrapModule(HeadingsWithDifferentWeightsModule)
  .catch(err => console.error(err));
