import { AuthGuard } from './guard/auth.guard';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { GenreListComponent } from './component/genre-list/genre-list.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: DashboardComponent,
    children: [
      { path: 'users', component: UserListComponent },
      { path: 'movies', component: MovieListComponent },
      { path: 'genres', component: GenreListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
