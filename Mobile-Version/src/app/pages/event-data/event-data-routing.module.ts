import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventDataPage } from './event-data.page';

const routes: Routes = [
  {
    path: '',
    component: EventDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventDataPageRoutingModule {}
