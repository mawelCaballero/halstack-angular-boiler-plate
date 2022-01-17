
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TextInputWithSuggestionsModule } from './text-input-with-suggestions.module';
platformBrowserDynamic().bootstrapModule(TextInputWithSuggestionsModule)
  .catch(err => console.error(err));
