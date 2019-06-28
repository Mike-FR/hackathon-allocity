import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { map } from "rxjs/operators";

@Injectable()
export class AuthService {

  
  public promesa: Promise<any>;
  authService: any;

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  loginTwitter () {
    return this.afAuth.auth.signInWithPopup( new firebase.auth.TwitterAuthProvider());
  }

  loginFacebook() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  loginGoogle() {
    /*this.getAuth().subscribe(auth => {
      this.emailUsuario = auth.email;
    });*/
    this.promesa = this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    //this.afAuth.auth.sendPasswordResetEmail(this.emailUsuario);
    return this.promesa;
  }

  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));

          
    });
  }

  sendEmailVerification() {
    const user = firebase.auth().currentUser;
    firebase.auth().languageCode = 'fr';
    if (user) {
      console.log('user in sendEmailVerification', user);
      user.sendEmailVerification().then(() => {
        console.log('email envoyé');
      }).catch((error) => {
        console.error('error sending email', error);
      });
    }
  
  }

  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
          err => reject(err));
    });
  }

  getAuth() {
    return this.afAuth.authState.pipe(map(auth => auth));
    //return this.afAuth.authState.map(auth => auth);
    ;
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

}
