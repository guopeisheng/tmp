import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { ProfileComponent } from '../profile/profile.component';

const route: Route[] = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'mainpage',
    component: MainPageComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(route,{useHash:true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
