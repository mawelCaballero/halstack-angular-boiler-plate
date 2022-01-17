
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FillParentSizeNumberModule } from './fill-parent-size-number.module';
platformBrowserDynamic().bootstrapModule(FillParentSizeNumberModule)
.catch(err => console.error(err));
