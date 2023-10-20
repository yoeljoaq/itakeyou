import { NgModule } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/compat/auth-guard';

const redireccionarlogin = () => redirectUnauthorizedTo(['/login']);

const routes: Routes = [
  {
    path: 'home',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redireccionarlogin},
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'reset-password-confirmation',
    loadChildren: () => import('./reset-password-confirmation/reset-password-confirmation.module').then( m => m.ResetPasswordConfirmationPageModule)
  },
  {
    path: 'driver',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redireccionarlogin},
    loadChildren: () => import('./pages/driver/driver.module').then( m => m.DriverPageModule)
  },
  {
    path: 'passenger',canActivate:[AngularFireAuthGuard],data:{authGuardPipe:redireccionarlogin},
    loadChildren: () => import('./pages/passenger/passenger.module').then( m => m.PassengerPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'persona',
    loadChildren: () => import('./pages/persona/persona.module').then( m => m.PersonaPageModule)
  },
  {
    path: 'datospersona/:id',
    loadChildren: () => import('./pages/datospersona/datospersona.module').then( m => m.DatospersonaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
