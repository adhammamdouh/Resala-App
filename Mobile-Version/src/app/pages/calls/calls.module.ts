import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CallsPageRoutingModule } from './calls-routing.module';

import { CallsPage } from './calls.page';
import { CustomComponents } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallsPageRoutingModule,
    CustomComponents
  ],
  declarations: [CallsPage]
})
export class CallsPageModule {}
