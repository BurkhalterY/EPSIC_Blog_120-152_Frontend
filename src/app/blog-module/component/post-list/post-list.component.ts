import { Component, OnInit } from '@angular/core';
import { Post } from '../../model/post';
import { PostService } from '../../service/post.service';
import { AuthService } from '../../../login-module/service/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

	public posts: Array<Post>;
	public logged: boolean;

	constructor(private _postService: PostService, private _authService: AuthService) { }

	ngOnInit(): void {
		this.onGetPosts();
		this.logged = this._authService.user.id > 0;
	}

	onGetPosts(): void {
		this._postService.getPosts().subscribe(
			data => {
				if (data) {
					this.posts = data;
				}
			},
			error => { }
		);
	}

	onAddPost(post: Post): void {
		this._postService.addPost(post).subscribe(
			data => {
				this.onGetPosts();
			},
			error => { }
		);
	}

	onUpdatePost(post: Post): void {
		this._postService.updatePost(post).subscribe(
			data => {
				this.onGetPosts();
			},
			error => { }
		);
	}

	onDeletePost(post: Post): void {
		this._postService.deletePost(post).subscribe(
			data => {
				this.onGetPosts();
			},
			error => { }
		);
	}
}
