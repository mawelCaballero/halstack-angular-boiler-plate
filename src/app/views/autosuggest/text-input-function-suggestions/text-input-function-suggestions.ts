
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TextInputFunctionSuggestionsModule } from './text-input-function-suggestions.module';
platformBrowserDynamic().bootstrapModule(TextInputFunctionSuggestionsModule)
  .catch(err => console.error(err));
