import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffersComponent } from './offers/offers.component';
import { ProfilComponent } from './profil/profil.component';
import { FideliteComponent } from './fidelite/fidelite.component';
import { RegisterUserComponent } from './authentification/register-user/register-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentification/login/login.component';

import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterUserComponent
  },

  {
    path: 'offres',
    component: OffersComponent, data: { animation: 'offersPage' }
  },
  {
    path: 'home',
    component: HomeComponent, data: { animation: 'homePage' }

  },
  {
    path: 'profil',
    component: ProfilComponent, data: { animation: 'profilPage' }
  },
  {
    path: 'fidelite',
    component: FideliteComponent, data: { animation: 'fidelitePage' }
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
