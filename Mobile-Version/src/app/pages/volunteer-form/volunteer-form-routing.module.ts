import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VolunteerFormPage } from './volunteer-form.page';

const routes: Routes = [
  {
    path: '',
    component: VolunteerFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolunteerFormPageRoutingModule {}
