import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AuthService } from './services/auth.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterUserComponent } from './authentification/register-user/register-user.component';

import { ModalFormComponent } from './modal-form/modal-form.component';


const config : FirebaseAppConfig = {
    apiKey: "AIzaSyDd9TWt69MCGnM3i7dF4QtPbey3zXMnPr0",
    authDomain: "allocity.firebaseapp.com",
    databaseURL: "https://allocity.firebaseio.com",
    projectId: "allocity",
    storageBucket: "",
    messagingSenderId: "468777907940",
    appId: "1:468777907940:web:ebc13135b2a9d07c"
  };


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    ModalFormComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
