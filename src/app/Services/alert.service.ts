import { Injectable } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { AlertButton } from '../Components/shared/normal-alert/alert-button';
import { AlertType } from '../Enums/alert-type.enum';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alertBody: string;
  public alertType: AlertType;
  public alertButtons: AlertButton[];

  constructor() { }

  showModal(alertBody, alertType, alertButtons){
    this.alertButtons = alertBody;
    this.alertType = alertType;
    this.alertButtons = alertButtons;

    var myModal = new bootstrap.Modal(document.getElementById('normalModal'));
    myModal.show();
  }

  closeModal(){
    var myModal = new bootstrap.Modal(document.getElementById('normalModal'));
    myModal.hide();
  }

}
