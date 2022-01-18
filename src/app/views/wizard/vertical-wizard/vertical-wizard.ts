import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { VerticalWizardModule } from './vertical-wizard.module';
platformBrowserDynamic().bootstrapModule(VerticalWizardModule)
  .catch(err => console.error(err));
