import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TextareaVertialgrowNoneModule } from './textarea-vertialgrow-none.module';
platformBrowserDynamic().bootstrapModule(TextareaVertialgrowNoneModule)
  .catch(err => console.error(err));
