
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FillParentInputTextModule } from './fill-parent-input-text.module';
platformBrowserDynamic().bootstrapModule(FillParentInputTextModule)
  .catch(err => console.error(err));
