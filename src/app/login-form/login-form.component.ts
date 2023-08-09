import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { LoggedinService } from '../loggedin.service';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  spinner: boolean = false;
  emailIdValue: string = '';
  passwordValue: string = '';
  errorMessage: string;
  constructor(private _loginService: RegisterService, private route:Router, private _onLogin: LoggedinService) { }

  ngOnInit(): void {
  }
  onSubmit(loginForm: NgForm) {
    this.spinner = true;
    console.log(this.emailIdValue, this.passwordValue);
    this._loginService.onUserLogin(this.emailIdValue, this.passwordValue)
      .subscribe({
        next: (data) => {
          console.log("login successful");
          this._loginService.userLoggedIn = true;
          console.log(data);
          this.spinner = false;
          this._onLogin.onLogin(true);
          console.log("setting login to "+this._onLogin.loggedIn)
          this.route.navigate(['/', 'profile']);
          },
        error: error => {
          this.errorMessage = error.error.message;
          this.spinner = false;
          }
      });
    loginForm.reset();
  }
  closeError() {
    this.errorMessage = '';
  }
}
