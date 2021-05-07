import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'events',
        children: [
          {
            path: '',
            loadChildren: () => import('../events/events.module').then(m => m.EventsPageModule)
          }
        ]
      },
      {
        path: 'volunteers',
        children: [
          {
            path: '',
            loadChildren: () => import('../volunteers/volunteers.module').then( m => m.VolunteersPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/volunteers',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
