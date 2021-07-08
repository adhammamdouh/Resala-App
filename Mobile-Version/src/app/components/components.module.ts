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
import { CallsButtonComponent } from './calls-button/calls-button.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { TranslateModule } from '@ngx-translate/core';
import { EventDataCollectorHeaderComponent } from './event-data-collector-header/event-data-collector-header.component';
import { MainPageBarComponent } from './main-page-bar/main-page-bar.component';
import { CallCardComponent } from './call-card/call-card.component';

@NgModule({
  declarations: [TitleBarComponent,
                SearchBarComponent,
                TabsComponent,
                VolunteerCardComponent,
                EventCardComponent,
                CallsButtonComponent,
                InputComponent,
                ButtonComponent,
                EventDataCollectorHeaderComponent,
                MainPageBarComponent,
                CallCardComponent
              ],
  exports: [TitleBarComponent,
            SearchBarComponent,
            TabsComponent,
            VolunteerCardComponent,
            EventCardComponent,
            CallsButtonComponent,
            InputComponent,
            ButtonComponent,
            EventDataCollectorHeaderComponent,
            MainPageBarComponent,
            CallCardComponent
          ],
  imports: [IonicModule.forRoot(), CommonModule, FormsModule, TranslateModule]
})

export class CustomComponents {

}
