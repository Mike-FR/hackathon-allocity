import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OffersComponent } from './offers/offers.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/offres',
    pathMatch: 'full'
  },
  {
    path: 'offres',
    component: OffersComponent, data: { animation: 'groceryPage' }
  },
  {
    path: 'home',
    component: HomeComponent, data: { animation: 'groceryPage' }
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
