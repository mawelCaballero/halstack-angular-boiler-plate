import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { V3MultipleSelectComponent } from './v3-multiple-select/v3-multiple-select.component';
import { V3UncontrolledSelectComponent } from './v3-uncontrolled-select/v3-uncontrolled-select.component';
import { V3ControlledSelectComponent } from './v3-controlled-select/v3-controlled-select.component';
import { V3SizedSelectComponent } from './v3-sized-select/v3-sized-select.component';
import { V3WithIconsSelectComponent } from './v3-with-icons-select/v3-with-icons-select.component';



@NgModule({
  declarations: [V3MultipleSelectComponent, V3UncontrolledSelectComponent, V3ControlledSelectComponent, V3SizedSelectComponent, V3WithIconsSelectComponent],
  imports: [
    CommonModule
  ]
})
export class V3SelectModule { }
