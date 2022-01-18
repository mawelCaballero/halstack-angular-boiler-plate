import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TextareaVertialgrowManualModule } from './textarea-vertialgrow-manual.module';
platformBrowserDynamic().bootstrapModule(TextareaVertialgrowManualModule)
  .catch(err => console.error(err));
