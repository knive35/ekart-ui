import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorouselComponent } from './components/corousel/corousel.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';


const routes: Routes = [
  {
    component:CorouselComponent,
    path:'corousel',
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
