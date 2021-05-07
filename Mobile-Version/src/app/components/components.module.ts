import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TabsComponent } from './tabs/tabs.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { VolunteerCardComponent } from './volunteer-card/volunteer-card.component';
import { EventCardComponent } from './event-card/event-card.component';

@NgModule({
  declarations: [TitleBarComponent,
                SearchBarComponent,
                TabsComponent,
                VolunteerCardComponent,
                EventCardComponent],
  exports: [TitleBarComponent,
            SearchBarComponent,
            TabsComponent,
            VolunteerCardComponent,
            EventCardComponent],
  imports: [IonicModule.forRoot(), CommonModule]
})

export class CustomComponents {

}
