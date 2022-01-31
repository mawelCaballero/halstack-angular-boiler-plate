import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorsHandler } from 'src/app/service/error.service';
import { ErrorComponent } from './error.component';
import {
  DxcHeadingModule,
  ThemeModule,
} from '@dxc-technology/halstack-angular';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    DxcHeadingModule,
    ThemeModule,
    RouterModule.forChild([
      {
        path: '',
        component: ErrorComponent,
      },
    ]),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler,
    },
  ],
})
export class ErrorModule {}
