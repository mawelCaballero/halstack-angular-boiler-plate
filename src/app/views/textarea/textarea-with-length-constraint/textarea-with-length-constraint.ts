import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TextareaWithLengthConstraintModule } from './textarea-with-length-constraint.module';
platformBrowserDynamic().bootstrapModule(TextareaWithLengthConstraintModule)
  .catch(err => console.error(err));
