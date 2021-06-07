import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/shared/dashboard/dashboard.component';
import { SideNavComponent } from './components/shared/side-nav/side-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { GridComponent } from './components/shared/grid/grid.component';
import { NormalAlertComponent } from './components/shared/normal-alert/normal-alert.component';
import { VolunteerCardComponent } from './components/volunteer-card/volunteer-card.component';
import { SearchComponent } from './components/shared/search/search.component';
import { StateBarComponent } from './components/shared/state-bar/state-bar.component';
import { FormComponent } from './components/shared/form/form.component';
import { AlertService } from './Services/alert.service';
import { EventCardComponent } from './components/event-card/event-card.component';
import { Ng2FittextModule } from "ng2-fittext";
import { CallCardComponent } from './components/shared/call-card/call-card.component';
import { InputComponent } from './components/input/input.component';
import { SelectBoxComponent } from './components/select-box/select-box.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { VolunteersFormComponent } from './components/shared/volunteers-form/volunteers-form.component';
import { AppRoutingModule } from './app-routing.module';
import { VolunteersDashboardComponent } from './components/volunteers-dashboard/volunteers-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SideNavComponent,
    GridComponent,
    NormalAlertComponent,
    VolunteerCardComponent,
    SearchComponent,
    StateBarComponent,
    FormComponent,
    EventCardComponent,
    CallCardComponent,
    InputComponent,
    SelectBoxComponent,
    TextareaComponent,
    VolunteersFormComponent,
    VolunteersDashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2FittextModule,
    AppRoutingModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
