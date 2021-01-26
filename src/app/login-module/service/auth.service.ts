import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from '../model/login';
import { User } from '../model/user';
import { AppSettings } from '../../appSettings';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	public user = {
		id: 0, // 0 = not logged
		username: "",
		isAdmin: false
	} as User;

	constructor(private http: HttpClient, private router: Router) { }

	login(login: Login) {
		let options = {
			headers: new HttpHeaders().set('Content-Type', 'application/json')
		}
		
		return this.http.post(AppSettings.API_ENDPOINT+"/users/check_password", JSON.stringify(login), options);
	}

	logout(): void {
		this.user = {
			id: 0,
			username: "",
			isAdmin: false
		} as User;
		this.router.navigate(['login']);
	}
}
