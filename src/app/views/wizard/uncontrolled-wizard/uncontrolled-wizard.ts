import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UncontrolledWizardModule } from './uncontrolled-wizard.module';
platformBrowserDynamic().bootstrapModule(UncontrolledWizardModule)
  .catch(err => console.error(err));
