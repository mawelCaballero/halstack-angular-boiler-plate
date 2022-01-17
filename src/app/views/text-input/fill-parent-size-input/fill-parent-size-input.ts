import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FillParentSizeInputModule } from './fill-parent-size-input.module';
platformBrowserDynamic().bootstrapModule(FillParentSizeInputModule)
  .catch(err => console.error(err));
