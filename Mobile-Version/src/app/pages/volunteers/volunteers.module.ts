import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VolunteersPageRoutingModule } from './volunteers-routing.module';

import { VolunteersPage } from './volunteers.page';
import { CustomComponents } from 'src/app/components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomComponents,
    VolunteersPageRoutingModule,
    TranslateModule
  ],
  declarations: [VolunteersPage]
})
export class VolunteersPageModule {}
