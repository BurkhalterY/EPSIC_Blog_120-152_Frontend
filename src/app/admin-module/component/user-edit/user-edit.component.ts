import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../blog-module/model/user';
import { AppSettings } from '../../../appSettings';
import { UserService } from './../../service/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

	@Input() user: User;
	public imageURL: string;
	public message: string;
	public success: boolean;

	constructor(private _userService: UserService) { }

	ngOnInit(): void {
		this.user.password = ""; //Delete password hash from object
		this.imageURL = AppSettings.API_ENDPOINT+'/users/'+this.user.id+'/avatar?t='+new Date().getTime();
	}

	onChangePassword(): void {
		this._userService.updateUser(this.user).subscribe(
			data => {
				this.message = "Mot de passe changé avec succès !";
				this.success = true;
			},
			error => {
				this.message = error.error;
				this.success = false;
			}
		);
	}

	onSetAdmin(): void {
		this.user.isAdmin = true;
		this._userService.updateUser(this.user).subscribe(
			data => {
				this.message = "Rôle admin ajouté";
				this.success = true;
			},
			error => {
				this.message = error.error;
				this.success = false;
			}
		);
	}

	onRemoveAdmin(): void {
		this.user.isAdmin = false;
		this._userService.updateUser(this.user).subscribe(
			data => {
				this.message = "Rôle admin supprimé";
				this.success = true;
			},
			error => {
				this.message = error.error;
				this.success = false;
			}
		);
	}

	fileChange(event): void {
		let fileList: FileList = event.target.files;
		if(fileList.length > 0) {
			let file: File = fileList[0];
			this._userService.updateAvatar(this.user.id, file).subscribe(
				data => {
					this.imageURL = AppSettings.API_ENDPOINT+'/users/'+this.user.id+'/avatar?t='+new Date().getTime();
				},
				error => { }
			);
		}
	}
}
