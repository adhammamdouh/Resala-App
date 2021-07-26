import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TabsComponent } from './tabs/tabs.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { EventDataCollectorBodyComponent } from './event-data-collector-body/event-data-collector-body.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { PopoverComponent } from './popover/popover.component';
import { VolunteerDataCollectorHeaderComponent } from './volunteer-data-collector-header/volunteer-data-collector-header.component';
import { VolunteerDataCollectorBodyComponent } from './volunteer-data-collector-body/volunteer-data-collector-body.component';
import { AssignCallsComponent } from './assign-calls/assign-calls.component';
import { EventAttendanceComponent } from './event-attendance/event-attendance.component';
import { MuliSelectBoxComponent } from './muli-select-box/muli-select-box.component';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { NoAvailableDataComponent } from './no-available-data/no-available-data.component';

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
                EventDataCollectorBodyComponent,
                MainPageBarComponent,
                CallCardComponent,
                TextAreaComponent,
                SelectBoxComponent,
                PopoverComponent,
                VolunteerDataCollectorHeaderComponent,
                VolunteerDataCollectorBodyComponent,
                AssignCallsComponent,
                EventAttendanceComponent,
                MuliSelectBoxComponent,
                DateTimePickerComponent,
                NoAvailableDataComponent,
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
            EventDataCollectorBodyComponent,
            MainPageBarComponent,
            CallCardComponent,
            TextAreaComponent,
            SelectBoxComponent,
            PopoverComponent,
            VolunteerDataCollectorHeaderComponent,
            VolunteerDataCollectorBodyComponent,
            AssignCallsComponent,
            EventAttendanceComponent,
            MuliSelectBoxComponent,
            DateTimePickerComponent,
            NoAvailableDataComponent
          ],
  imports: [IonicModule.forRoot(), CommonModule, FormsModule, TranslateModule, ReactiveFormsModule]
})

export class CustomComponents {

}
