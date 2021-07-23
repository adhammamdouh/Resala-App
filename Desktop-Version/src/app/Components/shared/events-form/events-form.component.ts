import { Component, OnInit } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { EventsCRUDService } from 'src/app/Controllers/eventHandler/events-crud.service';
import { PrivilegeHandlerService } from 'src/app/Controllers/PrivilegeHandler/privilege-handler.service';
import EventsForm from 'src/app/SharedData/eventsForm';
@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.scss']
})
export class EventsFormComponent implements OnInit {

  constructor(public eventsCRUD:EventsCRUDService, public privilegeHandler: PrivilegeHandlerService) { }
  
  ngOnInit(): void {
    this.enablePopUps();
    this.eventsCRUD.initializeEventForm();
  }

  enablePopUps(){
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
  }

}
