import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from '../model/login';
import { User } from '../model/user';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	public user = {
		username: "",
		userId: 0, // 0 = not logged
		isAdmin: false
	} as User;

	constructor(private http: HttpClient, private router: Router) { }

	login(login: Login) {
		let options = {
			headers: new HttpHeaders().set('Content-Type', 'application/json')
		}
		
		return this.http.post("https://localhost:44378/users/check_password", JSON.stringify(login), options);
	}

	logout(): void {
		this.user = {
			username: "",
			userId: 0,
			isAdmin: false
		} as User;
		this.router.navigate(['login']);
	}
}
