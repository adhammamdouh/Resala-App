import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolunteerFormPageRoutingModule } from './volunteer-form-routing.module';

import { VolunteerFormPage } from './volunteer-form.page';
import { CustomComponents } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolunteerFormPageRoutingModule,
    CustomComponents,
    ReactiveFormsModule
  ],
  declarations: [VolunteerFormPage]
})
export class VolunteerFormPageModule {}
