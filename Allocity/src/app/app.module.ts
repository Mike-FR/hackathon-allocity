import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AuthService } from './services/auth.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterUserComponent } from './authentification/register-user/register-user.component';

import { HomeComponent } from './home/home.component';
import { FideliteComponent } from './fidelite/fidelite.component';

import { OffersComponent } from './offers/offers.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfilComponent } from './profil/profil.component';
import { LoginComponent } from './authentification/login/login.component';
import { database } from 'firebase';

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
    LoginComponent,
    RegisterUserComponent,
    OffersComponent,
    HomeComponent,
    FideliteComponent,
    ProfilComponent,
    
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FlashMessagesModule

  ],
  providers: [
    AuthService,
    FlashMessagesService,
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
