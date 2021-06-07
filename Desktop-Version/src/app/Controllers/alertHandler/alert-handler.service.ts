import { Injectable } from '@angular/core';
import AlertButton  from 'src/app/Components/shared/normal-alert/alert-button';
import { AlertType } from 'src/app/Enums/alert-type.enum';
import { StatusCode } from 'src/app/Enums/status-code.enum';
import { AlertService } from 'src/app/Services/alert.service';

@Injectable({
  providedIn: 'root'
})
export class AlertHandlerService {
  
  constructor(private alertService: AlertService) { } 

  displayError(body:string, alertButtons:AlertButton[]){
    this.alertService.showModal(body, AlertType.error, alertButtons);
  }

  displayWarning(body:string, alertButtons:AlertButton){
    this.alertService.showModal(body, AlertType.warning, alertButtons);
  }
}
