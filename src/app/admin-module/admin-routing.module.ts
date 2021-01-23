import { AuthGuard } from './guard/auth.guard';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: DashboardComponent,
    children: [
      { path: 'users', component: UserListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
