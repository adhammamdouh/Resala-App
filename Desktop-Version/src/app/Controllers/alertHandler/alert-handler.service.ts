import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import AlertButton from 'src/app/Components/shared/normal-alert/alert-button';
import { AlertType } from 'src/app/Enums/alert-type.enum';
import { StatusCode } from 'src/app/Enums/status-code.enum';
import { AlertService } from 'src/app/Services/alert.service';
import { AuthService } from '../auth/auth.service';
import { VolunteersCRUD } from '../volunteerHandler/volunteers-handler.service';
import *  as  FrontEndErrors from '../../SharedData/FrontEndErrors.json';
import { GetAPILinksService } from 'src/app/services/get-apilinks.service';
import { RestfulAPIService } from 'src/app/services/RestfulAPI.service';
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  errorHeader = "خطأ";
  warningHeader = "تحذير";
  volunteer;
  event;
  routeMessageButtons: AlertButton[] = [
    {
      name: "موافق",
      handler: () => {
        this.router.navigate(['login'])
      }
    }
  ]

  errorButtons: AlertButton[] = [
    {
      name: "موافق",
      handler: () => {
        console.log("Error Handler Called");
      }
    }
  ]

  logoutWarningButtons: AlertButton[] = [
    {
      name: "موافق",
      handler: () => {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
      }
    },
    {
      name: "إالغاء",
      handler: () => {
      }
    }
  ]

  warningButtons: AlertButton[] = [
    {
      name: "موافق",
      handler: () => {
        console.log("Warning Handler Called");
      }
    }
  ]

  archiveVolunteerWarningButtons: AlertButton[] = [
    {
      name: "موافق",
      handler: () => {
        this.archiveVolunteer();
      }
    },
    {
      name: "إالغاء",
      handler: () => {
      }
    }
  ]

  activateVolunteerWarning: AlertButton[] = [
    {
      name: "موافق",
      handler: () => {
        this.archiveVolunteer();
      }
    },
    {
      name: "إالغاء",
      handler: () => {
      }
    }
  ]

  archiveEventWarningButtons: AlertButton[] = [
    {
      name: "موافق",
      handler: () => {
        this.deleteEvent()
      }
    },
    {
      name: "إالغاء",
      handler: () => {
      }
    }
  ]

  constructor(private restfulAPI:RestfulAPIService, private getApiLinks:GetAPILinksService, private alertService: AlertService, private authService: AuthService, private router: Router) { }

  handleError(error: any, data:any = null) {
    switch (error.status) {
      case StatusCode.notFound:
        this.displayError(error.error.error, this.errorButtons);
        break;
      case StatusCode.FEinvalidLoginUsername:
        this.displayError(error.error, this.errorButtons)
        break;
      case StatusCode.FEinvalidPassword:
        this.displayError(error.error, this.errorButtons)
        break;
      case StatusCode.wrongUsernameOrPassword:
        this.displayError(error.error.error, this.errorButtons)
        break;
      case StatusCode.unauthorized:
        this.displayError(error.error.error, this.routeMessageButtons)
        this.authService.deleteAuthorization();
        break;
      case StatusCode.internalServerError:
        this.authService.deleteAuthorization();
        this.displayError(error.error.error, this.routeMessageButtons)
      case StatusCode.FEmissingFields:
        this.displayError(error.error, this.errorButtons);
        break;
      case StatusCode.FEArchiveVolunteerWarning:
        this.volunteer= data;
        this.displayWarning(error.error +" "+ this.volunteer.firstName + "؟", this.archiveVolunteerWarningButtons);
        break;
      case StatusCode.FEArchiveEventWarning:
        this.event= data;
        this.displayWarning(error.error +" "+ this.event.name + "؟", this.archiveVolunteerWarningButtons);
        break;
      case StatusCode.FELogoutWarning:
        this.displayWarning(error.error, this.logoutWarningButtons);
        break;
      case StatusCode.FEActivateWarning:
        this.displayWarning(error.error, this.logoutWarningButtons);
        break;
      default:
        break;
    }
  }

  displayError(body: string, alertButtons: AlertButton[]) {
    this.alertService.showModal(body, this.errorHeader, alertButtons);
  }

  displayWarning(body: string, alertButtons: AlertButton[]) {
    this.alertService.showModal(body, this.warningHeader, alertButtons);
  }

  archiveVolunteer(){
    this.restfulAPI.postRequest(this.getApiLinks.getRequestArchiveVolunteerLink(), {'id': this.volunteer.id}).subscribe((res)=>{
      this.router.navigate(['loading'])
    }, (err)=>{
      this.handleError(err);
    })
  }

  activateVolunteer(){
    
  }

  deleteEvent(){
    this.restfulAPI.postRequest(this.getApiLinks.getDeleteEventLink(), {'id': this.event.id}).subscribe((res)=>{
      this.router.navigate(['loading'])
    }, (err)=>{
      this.handleError(err);
    })
  }
}
