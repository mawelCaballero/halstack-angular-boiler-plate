
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MaskedInputTextModule } from './masked-input-text.module';
platformBrowserDynamic().bootstrapModule(MaskedInputTextModule)
  .catch(err => console.error(err));
