import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogHomeComponent } from './component/blog-home/blog-home.component';

const routes: Routes = [
  {
    path: 'blog',
    component: BlogHomeComponent,
    /*children: [
      { path: '', component: HomeComponent },
      { path: 'search', component: SearchComponent },
      { path: 'my-list', component: MyListComponent }
    ]*/
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
