import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { V3FillParentTextareaModule } from './v3-fill-parent-textarea.module';
platformBrowserDynamic().bootstrapModule(V3FillParentTextareaModule)
  .catch(err => console.error(err));
