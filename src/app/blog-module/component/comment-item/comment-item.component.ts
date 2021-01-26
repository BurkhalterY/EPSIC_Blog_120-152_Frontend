import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from '../../model/comment';
import { CommentService } from './../../service/comment.service';
import { AuthService } from '../../../login-module/service/auth.service';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css']
})
export class CommentItemComponent implements OnInit {

	@Input() comment: Comment;
	@Input() postId: number;
	@Output() commentAdd = new EventEmitter<Comment>();
	@Output() commentUpdate = new EventEmitter<Comment>();
	@Output() commentDelete = new EventEmitter<Comment>();
	public edit: boolean = false;
	public canEdit: boolean = false;

	constructor(private _authService: AuthService) { }

	ngOnInit(): void {
		if(this.comment == null){
			this.comment = {
				authorId: this._authService.user.id,
				postId: this.postId
			} as Comment;
			this.edit = true;
		} else {
			this.comment.prettyDate = new Date(this.comment.date).toLocaleString();
			this.canEdit = this._authService.user.id == this.comment.authorId || this._authService.user.isAdmin;
		}
	}

	sendCommentAddOrUpdate() {
		if(this.comment.id){
			this.commentUpdate.emit(this.comment);
		} else {
			this.commentAdd.emit(this.comment);
		}
	}

	sendCommentDelete() {
		this.commentDelete.emit(this.comment);
	}

	commentEdit() {
		this.edit = true;
	}
}
