import { Component, Input, OnInit } from '@angular/core';
import ResalaEvent from 'src/app/domains/ResalaEvent/ResalaEvent';
import { PrivilegeHandlerService } from 'src/app/services/PrivilegeService/privilege-handler.service';

@Component({
  selector: 'app-event-data-collector-body',
  templateUrl: './event-data-collector-body.component.html',
  styleUrls: ['./event-data-collector-body.component.scss'],
})
export class EventDataCollectorBodyComponent implements OnInit {
  @Input() event: ResalaEvent;

  constructor(public privilegeHandler: PrivilegeHandlerService) { }

  ngOnInit() {}

}
