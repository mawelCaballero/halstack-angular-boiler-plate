
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { LinkWithActionModule } from '../link-with-action/link-with-action.module';
platformBrowserDynamic().bootstrapModule(LinkWithActionModule).catch(err => console.error(err));
