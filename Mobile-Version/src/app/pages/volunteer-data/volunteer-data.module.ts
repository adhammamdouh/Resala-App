import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolunteerDataPageRoutingModule } from './volunteer-data-routing.module';

import { VolunteerDataPage } from './volunteer-data.page';
import { CustomComponents } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VolunteerDataPageRoutingModule,
    CustomComponents
  ],
  declarations: [VolunteerDataPage]
})
export class VolunteerDataPageModule {}
