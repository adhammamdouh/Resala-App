import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AlertType } from 'src/app/Enums/alert-type.enum';
import { AlertService } from 'src/app/Services/alert.service';
import  AlertButton  from './alert-button';

@Component({
  selector: 'app-normal-alert',
  templateUrl: './normal-alert.component.html',
  styleUrls: ['./normal-alert.component.scss']
})

export class NormalAlertComponent implements OnInit {

  constructor(public alertService: AlertService) { }

  ngOnInit(): void {
    
  }


}
