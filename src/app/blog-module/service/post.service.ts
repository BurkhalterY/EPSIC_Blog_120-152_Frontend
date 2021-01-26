import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../../appSettings';
import { Post } from './../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

	constructor(private http: HttpClient) { }

	getPosts(): Observable<Array<Post>> {
		return this.http.get<[Post]>(AppSettings.API_ENDPOINT+'/posts');
	}

	addPost(post: Post) {
		let options = {
			headers: new HttpHeaders().set('Content-Type', 'application/json'),
		}

		return this.http.post(AppSettings.API_ENDPOINT+'/posts', JSON.stringify(post), options);
	}

	updatePost(post: Post) {
		let options = {
			headers: new HttpHeaders().set('Content-Type', 'application/json'),
		}

		return this.http.post(AppSettings.API_ENDPOINT+'/posts/'+post.id, JSON.stringify(post), options);
	}

	deletePost(post: Post) {
		let options = {
			headers: new HttpHeaders().set('Content-Type', 'application/json'),
		}

		return this.http.delete(AppSettings.API_ENDPOINT+'/posts/'+post.id, options);
	}
}
