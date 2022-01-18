import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ControlledWizardModule } from './controlled-wizard.module';
platformBrowserDynamic().bootstrapModule(ControlledWizardModule)
  .catch(err => console.error(err));
