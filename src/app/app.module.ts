import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { fakeBackendProvider } from './_helpers';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { NgrxLearningComponent } from './ngrx-learning/ngrx-learning.component';
import { StoreModule } from '@ngrx/store';


const routes: Routes = [
  { path: '', redirectTo: 'AppComponent', pathMatch: 'full'},
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'users', component: UsersComponent},
  { path: 'rxjs-learning', component: RxjsLearningComponent},
  { path: 'ngrx-learning', component: NgrxLearningComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupFormComponent,
    HomeComponent,
    ProfileComponent,
    UsersComponent,
    RxjsLearningComponent,
    NgrxLearningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NoopAnimationsModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
