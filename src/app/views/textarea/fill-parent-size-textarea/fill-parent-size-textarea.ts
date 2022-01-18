import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FillParentSizeTextareaModule } from './fill-parent-size-textarea.module';
platformBrowserDynamic().bootstrapModule(FillParentSizeTextareaModule)
  .catch(err => console.error(err));
