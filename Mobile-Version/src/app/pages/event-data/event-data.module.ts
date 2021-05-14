import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventDataPageRoutingModule } from './event-data-routing.module';

import { EventDataPage } from './event-data.page';
import { CustomComponents } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventDataPageRoutingModule,
    CustomComponents
  ],
  declarations: [EventDataPage]
})
export class EventDataPageModule {}
