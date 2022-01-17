import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FillParentButtonModule } from './fill-parent-button.module';
platformBrowserDynamic().bootstrapModule(FillParentButtonModule)
  .catch(err => console.error(err));
