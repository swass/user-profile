import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfile } from './userProfile';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  userLoggedIn: boolean = false;
  public user: Observable<UserProfile | null>;

  constructor( private route: Router, private http:HttpClient) { }

  onUserLogin(email: string, password: string) {
    return this.http.post<UserProfile>(`http://localhost:4000/users/authenticate`, { email, password })
      .pipe(map(user => {
                localStorage.setItem('user', JSON.stringify(user));
                return user;
            }));
  }
  onUserSignup(user: UserProfile) {
    // this.route.navigate(['/profile']);
    return this.http.post(`http://localhost:4000/users/register`, user)
      .pipe(map(user => {
                localStorage.setItem('user', JSON.stringify(user));
                return user;
            }));
  }

  getAllUsers() {
    return this.http.get<any[]>(`http://localhost:4000/users`);
  }
  onUserLogout() {
    console.log("onUserLogout");
  }

  onLoadUser() {
    
  }
  onDeleteUser(id:number){
    return this.http.delete(`http://localhost:4000/users/${id}`);
  }
  

}
