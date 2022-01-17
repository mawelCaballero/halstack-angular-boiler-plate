import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTagComponent } from './basic-tag/basic-tag.component';
import { TagWithLinkComponent } from './tag-with-link/tag-with-link.component';
import { TagWithIconComponent } from './tag-with-icon/tag-with-icon.component';
import { SizedTagComponent } from './sized-tag/sized-tag.component';



@NgModule({
  declarations: [BasicTagComponent, TagWithLinkComponent, TagWithIconComponent, SizedTagComponent],
  imports: [
    CommonModule
  ]
})
export class TagModule { }
