import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultChipComponent } from './default-chip/default-chip.component';
import { ChipWithIconsComponent } from './chip-with-icons/chip-with-icons.component';



@NgModule({
  declarations: [DefaultChipComponent, ChipWithIconsComponent],
  imports: [
    CommonModule
  ]
})
export class ChipModule { }
