import { Component } from '@angular/core';
import { AuthService } from './login-module/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'EpsicBlogFrontend';

	constructor(private _authService: AuthService) { }

	/*
	 * 0 = guest
	 * 1 = logged
	 * 2 = admin
	 */
	getLevel(): number {
		if(this._authService.user.id != 0){
			if(this._authService.user.isAdmin){
				return 2;
			}
			return 1;
		}
		return 0;
	}
}
