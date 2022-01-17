import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SidenavWithChildrenModule } from './sidenav-with-children.module';
platformBrowserDynamic().bootstrapModule(SidenavWithChildrenModule)
  .catch(err => console.error(err));
