import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
      .then((res) => {
        this.flashMessage.show('Utilisateur connecté.',
          { cssClass: 'alert-success container', timeout: 4000 });
        this.router.navigate(['/offres']);
      }).catch((err) => {
        this.flashMessage.show(err.message,
          { cssClass: 'alert-danger col-md-6 mx-auto', timeout: 4000 });
        this.router.navigate(['/login']);
      });
  }

  onClickGoogleLogin() {
    this.authService.loginGoogle()
      .then((res) => {
        this.router.navigate(['/offres']);
      }).catch(err => console.log(err.message));
  }

  onClickFacebookLogin() {
    this.authService.loginFacebook()
      .then((res) => {
        this.router.navigate(['/offres']);
      }).catch(err => console.log(err.message));
  }

  onClickTwitterLogin() {
    this.authService.loginTwitter()
      .then((res) => {
        this.router.navigate(['/offres']);
      }).catch (err => console.log(err.message));
  }
}

