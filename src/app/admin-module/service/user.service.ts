import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './../model/user';
import { AppSettings } from '../../appSettings';

@Injectable({
  providedIn: 'root'
})
export class UserService {

	constructor(private http: HttpClient) { }

	getUsers(): Observable<Array<User>> {
		return this.http.get<[User]>(AppSettings.API_ENDPOINT+'/users');
	}

	addUser(user: User): Observable {
		let options = {
			headers: new HttpHeaders().set('Content-Type', 'application/json'),
		}

		return this.http.post(AppSettings.API_ENDPOINT+'/users', JSON.stringify(user), options);
	}

	updateUser(user: User): Observable {
		let options = {
			headers: new HttpHeaders().set('Content-Type', 'application/json'),
		}

		return this.http.post(AppSettings.API_ENDPOINT+'/users/'+user.id, JSON.stringify(user), options);
	}

	deleteUser(user: User): Observable {
		let options = {
			headers: new HttpHeaders().set('Content-Type', 'application/json'),
		}

		return this.http.delete(AppSettings.API_ENDPOINT+'/users/'+user.id, options);
	}

	updateAvatar(id: number, avatar: File): Observable {
		let formData = new FormData();
		formData.append('file', avatar, avatar.name);
		return this.http.post(AppSettings.API_ENDPOINT+'/users/'+id+'/avatar', formData);
	}
}
