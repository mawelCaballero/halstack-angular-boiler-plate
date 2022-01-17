import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultFooterComponent } from './default-footer/default-footer.component';
import { CustomContenttFooterComponent } from './custom-contentt-footer/custom-contentt-footer.component';
import { CustomContenttFooterModule } from './custom-contentt-footer/custom-contentt-footer.module';
import { DefaultFooterModule } from './default-footer/default-footer.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DefaultFooterModule,
    CustomContenttFooterModule
  ]
})
export class FooterModule { }
