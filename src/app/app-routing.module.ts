import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorouselComponent } from './components/corousel/corousel.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';


const routes: Routes = [
  {
    component:HomePageComponent,
    path:'',
    canActivate:[]
  },
  {
    component:LoginPageComponent,
    path:'login',
    canActivate:[]
  },
  {
    component:ProfilePageComponent,
    path:'profile',
    canActivate:[]
  },
  {
    component:CartPageComponent,
    path:'cart',
    canActivate:[]
  },
  {
    component:AboutPageComponent,
    path:'about',
    canActivate:[]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
