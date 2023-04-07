import { Injectable } from '@angular/core';
import{ Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoggedinService {
  private _loginSource = new Subject<boolean>();
  login$ = this._loginSource.asObservable();
  loggedIn = false;


  onLogin(loggedIn: boolean) {
    this.loggedIn = loggedIn;
    this._loginSource.next(loggedIn);
  }


  checkLogin() {
    
  }
  constructor() { }
}
