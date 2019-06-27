import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffersComponent } from './offers/offers.component';
import { RegisterUserComponent } from './authentification/register-user/register-user.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { FideliteComponent } from './fidelite/fidelite.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'login', component: RegisterUserComponent
  },

  {
    path: 'offres',
    component: OffersComponent,  data: { animation: 'offersPage' }
  },
  {
    path: 'home',
    component: HomeComponent,
   
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
