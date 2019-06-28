import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.flashMessage.show('Utilisateur créé.',
          { cssClass: 'alert-success container', timeout: 4000 });

        this.authService.sendEmailVerification();
        this.router.navigate(['/offres']);


      }).catch((err) => {
        this.flashMessage.show(err.message,
          { cssClass: 'alert-danger col-md-6 mx-auto', timeout: 4000 });
      });
  }
}
