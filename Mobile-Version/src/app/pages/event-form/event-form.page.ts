import { Component, OnInit } from '@angular/core';
import { accessRights } from 'src/app/data/general-data.enum';
import { PrivilegeHandlerService } from 'src/app/services/PrivilegeService/privilege-handler.service';
import { EventForm } from './event-form';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.page.html',
  styleUrls: ['./event-form.page.scss'],
})
export class EventFormPage implements OnInit {
  eventFormAtt: EventForm = new EventForm();
  isAddForm: boolean = true;

  constructor(private privilegeHandler: PrivilegeHandlerService) { }

  ngOnInit() {
  }

  addEvent() {

  }

  editEvent() {

  }
}
