import { Component, Input, OnInit } from '@angular/core';
import { CallStatus } from 'src/app/Enums/call-status.enum';
import { CallProperties } from './call-properties';

@Component({
  selector: 'app-call-card',
  templateUrl: './call-card.component.html',
  styleUrls: ['./call-card.component.scss']
})
export class CallCardComponent implements OnInit {
  callStatus = CallStatus;
  cardStatus: CallStatus = CallStatus.active;
  isSubmitting: boolean = false;

  @Input() properties: CallProperties;

  constructor() {
  }

  ngOnInit(): void {
  }

}
