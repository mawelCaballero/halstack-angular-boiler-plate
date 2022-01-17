
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UndecoratedLinkWithNewWindowModule } from './undecorated-link-with-new-window.module';
platformBrowserDynamic().bootstrapModule(UndecoratedLinkWithNewWindowModule).catch(err => console.error(err));
