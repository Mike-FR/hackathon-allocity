import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffersComponent } from './offers/offers.component';
import { RegisterUserComponent } from './authentification/register-user/register-user.component';
import { HomeComponent } from './home/home.component';

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
    component: OffersComponent
  },
  {
    path: 'home',
    component: HomeComponent,
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
