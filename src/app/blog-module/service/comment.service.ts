import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../../appSettings';
import { Comment } from './../model/comment';
import { Post } from './../model/post';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

	constructor(private http: HttpClient) { }

	getComments(post: Post): Observable<Array<Comment>> {
		return this.http.get<[Comment]>(AppSettings.API_ENDPOINT+'/posts/'+post.id+'/comments');
	}

	addComment(comment: Comment) {
		let options = {
			headers: new HttpHeaders().set('Content-Type', 'application/json'),
		}

		return this.http.post(AppSettings.API_ENDPOINT+'/comments', JSON.stringify(comment), options);
	}

	updateComment(comment: Comment) {
		let options = {
			headers: new HttpHeaders().set('Content-Type', 'application/json'),
		}

		return this.http.post(AppSettings.API_ENDPOINT+'/comments/'+comment.id, JSON.stringify(comment), options);
	}

	deleteComment(comment: Comment) {
		let options = {
			headers: new HttpHeaders().set('Content-Type', 'application/json'),
		}

		return this.http.delete(AppSettings.API_ENDPOINT+'/comments/'+comment.id, options);
	}
}
