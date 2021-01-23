import { Component, OnInit } from '@angular/core';
import { RegisterService } from './../../service/register.service';
import { Register } from '../../model/register';

@Component({
	selector: 'app-register-form',
	templateUrl: './register-form.component.html',
	styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

	public register = { username: "", password: "", passconf: "" } as Register;
	public message: string = "";
	public success: boolean = false;

	constructor(private _registerService: RegisterService) { }

	ngOnInit(): void {
	}

	onRegister(): void {
		if(this.register.username != "" && this.register.password != "" && this.register.passconf != ""){
			this._registerService.register(this.register).subscribe(
				data => {
					this.message = "Compte créé avec succès ! Vous pouvez vous connecter à gauche.";
					this.success = true;
				},
				error => {
					this.message = error.error;
					this.success = false;
				}
			);
		} else {
			this.message = "Veuillez remplir chaque champs svp.";
		}
	}
}
