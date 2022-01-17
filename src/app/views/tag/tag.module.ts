import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTagComponent } from './basic-tag/basic-tag.component';
import { TagWithLinkComponent } from './tag-with-link/tag-with-link.component';
import { TagWithIconComponent } from './tag-with-icon/tag-with-icon.component';
import { SizedTagComponent } from './sized-tag/sized-tag.component';
import { BasicTagModule } from './basic-tag/basic-tag.module';
import { TagWithIconModule } from './tag-with-icon/tag-with-icon.module';
import { SizedTagModule } from './sized-tag/sized-tag.module';
import { TagWithLinkModule } from './tag-with-link/tag-with-link.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BasicTagModule,
    SizedTagModule,
    TagWithIconModule,
    TagWithLinkModule
  ]
})
export class TagModule { }
