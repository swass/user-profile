import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../userProfile';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { LoggedinService } from '../loggedin.service';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  signupForm: FormGroup;
  profile = new UserProfile();
  states: string[] = this.profile.states;
  users?: any[];
  nameInvalid:boolean = false;
  emailInvalid:boolean = false;
  phoneInvalid:boolean = false;
  passwordInvalid:boolean = false;
  confirmPasswordInvalid:boolean=false;
  confirmPasswordNotMatched:boolean = false
  

  constructor(private _signup: RegisterService,  private route: Router, private _onlogin: LoggedinService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.minLength(6)]),
      emailId: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),
      confirmPassword: new FormControl(),
      phoneNumber: new FormControl('',[ Validators.required, Validators.minLength(9)]),
      dob: new FormControl(),
      address: new FormGroup({
        address1: new FormControl(),
        city: new FormControl(),
        state: new FormControl(null),
        pincode: new FormControl()
      })
      
    });
    
  }
  onSubmit(data: FormGroup) {
    
    if(data.invalid){
      if(data.value.fullName == '' ){
        this.nameInvalid = true;
      } else{
        this.nameInvalid = false;
      }
      
      if(data.value.emailId == '' ){
        this.emailInvalid = true;
      }else{
        this.emailInvalid = false;
      }
      
      if(data.value.phoneNumber == '' || data.value.phoneNumber == null){
        this.phoneInvalid = true;
      } else{
        this.phoneInvalid = false;
      }
      if(data.value.password == '' || data.value.password == null ){
        this.passwordInvalid = true;
      }else{
        this.passwordInvalid = false;
      }
      if(data.value.confirmPassword == '' || data.value.confirmPassword == null){
        this.confirmPasswordInvalid = true;
      }else{
        if(data.value.confirmPassword != data.value.password){
          this.confirmPasswordNotMatched = true;
        }else{
          this.confirmPasswordInvalid = false;
          this.confirmPasswordNotMatched = false
        }
        this.confirmPasswordInvalid = false;
      }

    } else{
      this.profile.name = data.value.fullName;
      this.profile.email = data.value.emailId;
      this.profile.password = data.value.password;
      this.profile.dob = data.value.dob;
      this.profile.phoneNumber = data.value.phoneNumber;
      this.profile.address1 = data.value.address.address1;
      this.profile.city = data.value.address.city;
      this.profile.state = data.value.address.state;
      this.profile.pincode = data.value.address.pincode;
      this._signup.onUserSignup(this.profile)
      .pipe()
              .subscribe({
                  next: (data) => {
                  this._signup.userLoggedIn = true;
                  this._onlogin.onLogin(true);
                  this.route.navigate(['/', 'profile']);
                  },
                  error: error => {
                    console.log(error.message);   
                  }
              });
    }
    
    
  }
  signupError(){
    console.log("error");
  }

}
