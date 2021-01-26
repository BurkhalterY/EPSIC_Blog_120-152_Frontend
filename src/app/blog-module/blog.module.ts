import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogRoutingModule } from './blog-routing.module';
import { PostItemComponent } from './component/post-item/post-item.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { CommentItemComponent } from './component/comment-item/comment-item.component';

@NgModule({
  declarations: [
    PostItemComponent,
    PostListComponent,
    CommentItemComponent,
  ],
  exports: [
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
