import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogRoutingModule } from './blog-routing.module';
import { PostComponent } from './component/post/post.component';
import { CommentComponent } from './component/comment/comment.component';
import { BlogHomeComponent } from './component/blog-home/blog-home.component';

@NgModule({
  declarations: [
    PostComponent,
    CommentComponent,
    BlogHomeComponent
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
