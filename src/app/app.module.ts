import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/shared/dashboard/dashboard.component';
import { SideNavComponent } from './components/shared/side-nav/side-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { GridComponent } from './components/grid/grid.component';
import { NormalAlertComponent } from './Components/shared/normal-alert/normal-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SideNavComponent,
    GridComponent,
    NormalAlertComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
