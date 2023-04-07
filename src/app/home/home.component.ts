import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedinService } from '../loggedin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedInUser = localStorage.getItem('user');
  loggedin: boolean = false;
  constructor(private route:Router, private _onlogin: LoggedinService) { }

  ngOnInit(): void {
    console.log("inside home menu"+this. _onlogin.loggedIn);
    this._onlogin.login$
      .subscribe(
        message => {
          this.loggedin = message;
          console.log("inside subscribe "+this.loggedin)
        }
      );   
  }
  

  
  onLogout() {
    localStorage.removeItem('user');
    this.loggedInUser = null;
    this.loggedin = false;
    this.route.navigate(['/','login'])
  }
}
