import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { GenreListComponent } from './component/genre-list/genre-list.component';
import { MovieEditComponent } from './component/movie-edit/movie-edit.component';
import { UserEditComponent } from './component/user-edit/user-edit.component';


@NgModule({
  declarations: [DashboardComponent, UserListComponent, MovieListComponent, GenreListComponent, MovieEditComponent, UserEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
