import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  newUser = { email: '', password: '' };
  existingUser = { email: '', password: '' };


  loginFormModalEmail = new FormControl('', Validators.email);
  loginFormModalPassword = new FormControl('', Validators.required);

  signupFormModalName = new FormControl('', Validators.required);
  signupFormModalEmail = new FormControl('', Validators.email);
  signupFormModalPassword = new FormControl('', Validators.required);
  router: any;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  registerUser() {
    this.authService.register(this.newUser.email, this.newUser.password)
      .then(createdUser => {
        console.log('createdUser', createdUser);

        // reset form    
        this.newUser.email = '';
        this.newUser.password = '';

        // send email verification
        this.authService.sendEmailVerification();
      })
      .catch(error => console.error(error.message));
  }

  loginUser() {
    this.authService.login(this.existingUser.email, this.existingUser.password)
      .then((value) => {
        this.router.navigate(['/login', 'offres']);
        console.log('login réussi :)', value);
      })
      .catch(err => {
        console.log('erreur :(', err.message);
      });
  }

  logoutUser() {
    this.authService.logout();
  }

}