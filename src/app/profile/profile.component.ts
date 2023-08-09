import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import {MatAccordion} from '@angular/material/expansion';
import { LoggedinService } from '../loggedin.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  name: string = '';
  user: any;
  user1: any;
  email: string;
  phoneNumber: string;
  dob: Date;
  address1: string;
  city: string;
  state: string;
  pincode: string;
  showProfileOptions:boolean= false;

  //delete user
  deleteResponse: Observable<any>;


  constructor(private _profile: RegisterService, private route: Router, private _loginStatus:LoggedinService) { }

  ngOnInit(): void {

    //get the loggedin user details from local storage
    this.user = localStorage.getItem('user');

    //check if user exists and logged in
    if (this._loginStatus.loggedIn && this.user) {
      this.user1 = JSON.parse(this.user);
      this.name = this.user1.name;
      this.email = this.user1.email;
      this.phoneNumber = this.user1.phoneNumber;
      this.dob = this.user1.dob;
      this.address1 = this.user1.address1;
      this.city = this.user1.city;
      this.state = this.user1.state;
    } else {
      this.route.navigate(['/', 'login']);
    }
    
  }

  deleteUser(){
    this.deleteResponse = this._profile.onDeleteUser(this.user1.id);
    this.deleteResponse.subscribe(
      {
        next: (response) => {
          console.log("success"+response);
          localStorage.removeItem('user');
          this._loginStatus.loggedIn = false;
          this._loginStatus.onLogin(false);
          this.route.navigate(['/','login'])
        },
        error: (error) => {
          console.log("error"+error);
        },
        complete: () => {
          console.log("complete");
        }
      }
    )
  }

  editUser(){
    this.route.navigate(['/', 'edit-profile']);
  }
  showProfileMenu(){
    this.showProfileOptions = !this.showProfileOptions;
  }

}
