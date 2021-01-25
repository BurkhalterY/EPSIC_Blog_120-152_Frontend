import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { RegisterFormComponent } from './component/register-form/register-form.component';
import { AuthHomeComponent } from './component/auth-home/auth-home.component';
import { LogoutComponent } from './component/logout/logout.component';

@NgModule({
  declarations: [LoginFormComponent, RegisterFormComponent, AuthHomeComponent, LogoutComponent],
  exports: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
