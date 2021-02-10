import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AlertType } from 'src/app/Enums/alert-type.enum';

@Component({
  selector: 'app-normal-alert',
  templateUrl: './normal-alert.component.html',
  styleUrls: ['./normal-alert.component.scss']
})

export class NormalAlertComponent implements OnInit {
  @Input() alertType: AlertType;
  @Input() alertBody: string;
  @Output() onAcceptance = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
    
  }

  onClickYes(){
    this.onAcceptance.emit();
  }

}
