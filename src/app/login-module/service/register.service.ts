import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from '../model/register';
import { AppSettings } from '../../appSettings';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {}

  register(register: Register) {
	let options = {
		headers: new HttpHeaders().set('Content-Type', 'application/json')
	}
	
	return this.http.post(AppSettings.API_ENDPOINT+"/users", JSON.stringify(register), options);
  }
}
