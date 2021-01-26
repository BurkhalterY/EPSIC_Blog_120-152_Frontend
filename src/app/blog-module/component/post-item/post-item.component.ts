import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../model/post';
import { Comment } from '../../model/comment';
import { AuthService } from '../../../login-module/service/auth.service';
import { CommentService } from '../../service/comment.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

	@Input() post: Post;
	@Output() postAdd = new EventEmitter<Post>();
	@Output() postUpdate = new EventEmitter<Post>();
	@Output() postDelete = new EventEmitter<Post>();
	public edit: boolean = false;
	public canEdit: boolean = false;
	public showComments: boolean;
	public logged: boolean;

	constructor(private _authService: AuthService, private _commentService: CommentService) { }

	ngOnInit(): void {
		this.logged = this._authService.user.id > 0;
		if(this.post == null){
			this.post = {
				authorId: this._authService.user.id
			} as Post;
			this.edit = true;
		} else {
			this.post.prettyDate = new Date(this.post.date).toLocaleString();
			this.canEdit = this._authService.user.id == this.post.authorId || this._authService.user.isAdmin;
		}
	}

	sendPostAddOrUpdate() {
		if(this.post.id){
			this.postUpdate.emit(this.post);
		} else {
			this.postAdd.emit(this.post);
		}
	}

	sendPostDelete() {
		this.postDelete.emit(this.post);
	}

	postEdit() {
		this.edit = true;
	}

	toggleComments() {
		this.showComments = !this.showComments;
	}

	onGetComments(): void {
		this._commentService.getComments(this.post).subscribe(
			data => {
				if (data) {
					this.post.comments = data;
				}
			},
			error => { }
		);
	}

	onAddComment(comment: Comment): void {
		this._commentService.addComment(comment).subscribe(
			data => {
				this.onGetComments();
			},
			error => { }
		);
	}

	onUpdateComment(comment: Comment): void {
		this._commentService.updateComment(comment).subscribe(
			data => {
				this.onGetComments();
			},
			error => { }
		);
	}

	onDeleteComment(comment: Comment): void {
		this._commentService.deleteComment(comment).subscribe(
			data => {
				this.onGetComments();
			},
			error => { }
		);
	}
}
