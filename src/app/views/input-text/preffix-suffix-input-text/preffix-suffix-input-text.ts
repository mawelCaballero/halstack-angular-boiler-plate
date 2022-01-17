import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PreffixSuffixInputTextModule } from './preffix-suffix-input-text.module';
platformBrowserDynamic().bootstrapModule(PreffixSuffixInputTextModule)
  .catch(err => console.error(err));
