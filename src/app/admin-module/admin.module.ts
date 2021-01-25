import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserEditComponent } from './component/user-edit/user-edit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserListComponent, UserEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ]
})
export class AdminModule { }
