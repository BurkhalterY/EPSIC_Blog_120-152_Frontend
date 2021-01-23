import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserEditComponent } from './component/user-edit/user-edit.component';


@NgModule({
  declarations: [DashboardComponent, UserListComponent, UserEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
