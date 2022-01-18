import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V3MultipleSelectModule } from './v3-multiple-select/v3-multiple-select.module';
import { V3UncontrolledSelectModule } from './v3-uncontrolled-select/v3-uncontrolled-select.module';
import { V3ControlledSelectModule } from './v3-controlled-select/v3-controlled-select.module';
import { V3SizedSelectModule } from './v3-sized-select/v3-sized-select.module';
import { V3WithIconsSelectModule } from './v3-with-icons-select/v3-with-icons-select.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    V3MultipleSelectModule,
    V3UncontrolledSelectModule,
    V3ControlledSelectModule,
    V3SizedSelectModule,
    V3WithIconsSelectModule
  ]
})
export class V3SelectModule { }
