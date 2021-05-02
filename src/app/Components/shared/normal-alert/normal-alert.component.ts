import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AlertType } from 'src/app/Enums/alert-type.enum';
import { AlertService } from 'src/app/Services/alert.service';
import { AlertButton } from './alert-button';

@Component({
  selector: 'app-normal-alert',
  templateUrl: './normal-alert.component.html',
  styleUrls: ['./normal-alert.component.scss']
})

export class NormalAlertComponent implements OnInit {
  alertType: AlertType;
  alertBody: string;
  alertButtons: AlertButton[];
  @Output() onAcceptance = new EventEmitter<any>();

  constructor(public alertService: AlertService) { }

  ngOnInit(): void {
    this.alertType = this.alertService.alertType;
    this.alertBody = this.alertService.alertBody;
    this.alertButtons = this.alertService.alertButtons;
  }

  onClickYes(){
    this.onAcceptance.emit();
  }

}
