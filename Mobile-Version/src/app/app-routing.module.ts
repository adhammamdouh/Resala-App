import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/AuthService/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'events',
    loadChildren: () => import('./pages/events/events.module').then( m => m.EventsPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'volunteers',
    loadChildren: () => import('./pages/volunteers/volunteers.module').then( m => m.VolunteersPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'event-data',
    loadChildren: () => import('./pages/event-data/event-data.module').then( m => m.EventDataPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'calls',
    loadChildren: () => import('./pages/calls/calls.module').then( m => m.CallsPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'volunteer-data',
    loadChildren: () => import('./pages/volunteer-data/volunteer-data.module').then( m => m.VolunteerDataPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'event-form',
    loadChildren: () => import('./pages/event-form/event-form.module').then( m => m.EventFormPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'volunteer-form',
    loadChildren: () => import('./pages/volunteer-form/volunteer-form.module').then( m => m.VolunteerFormPageModule),
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
