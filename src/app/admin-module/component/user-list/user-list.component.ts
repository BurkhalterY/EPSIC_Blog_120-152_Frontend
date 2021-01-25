import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

	public users: Array<User>;

	constructor(private _userService: UserService) { }

	ngOnInit(): void {
		this.onGetUsers();
	}

	onGetUsers(): void {
		this._userService.getUsers().subscribe(
			data => {
				if (data) {
					this.users = data;
				}
			},
			error => { }
		);
	}
}
