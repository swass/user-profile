import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { UserProfile } from '../userProfile';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: UserProfile[] = [];

  constructor(private _signup: RegisterService) { }

  ngOnInit(): void {
    this._signup.getAllUsers()
      .subscribe(data => {
        let userArray: UserProfile[] = [];
        for (let singleUser of data) {
          let user = new UserProfile();
          // console.log(singleUser);
          this.users.push(singleUser);
        }
        console.log(this.users);
      });      
  }
  

}
