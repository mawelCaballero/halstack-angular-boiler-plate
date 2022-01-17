import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultCardComponent } from './default-card/default-card.component';
import { CardWithLinkComponent } from './card-with-link/card-with-link.component';
import { CardWithActionComponent } from './card-with-action/card-with-action.component';



@NgModule({
  declarations: [DefaultCardComponent, CardWithLinkComponent, CardWithActionComponent],
  imports: [
    CommonModule
  ]
})
export class CardModule { }
