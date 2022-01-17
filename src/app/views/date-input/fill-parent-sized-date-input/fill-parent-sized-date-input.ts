import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FillParentSizedDateInputModule } from './fill-parent-sized-date-input.module';
platformBrowserDynamic().bootstrapModule(FillParentSizedDateInputModule)
  .catch(err => console.error(err));
