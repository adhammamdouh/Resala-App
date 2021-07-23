import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EventsDashboardComponent } from './components/events-dashboard/events-dashboard.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/shared/dashboard/dashboard.component';
import { VolunteersDashboardComponent } from './components/volunteers-dashboard/volunteers-dashboard.component';
import { AuthGuard } from './Guards/auth.guard';
import { NotauthGuard } from './Guards/notauth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loading',
    pathMatch: 'full'
  },
  {
    path: '', component: DashboardComponent, children: [
      {
        path: 'volunteers',
        component: VolunteersDashboardComponent
      },
      {
        path:'events',
        component: EventsDashboardComponent
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent, canActivate: [NotauthGuard]
  },
  {
    path: 'loading', component: LoadingComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }