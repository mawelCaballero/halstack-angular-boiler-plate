import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TextareaWithPatternConstraintModule } from './textarea-with-pattern-constraint.module';
platformBrowserDynamic().bootstrapModule(TextareaWithPatternConstraintModule)
    .catch(err => console.error(err));
