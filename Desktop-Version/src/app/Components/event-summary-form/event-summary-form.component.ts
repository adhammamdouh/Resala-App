import { Component, OnInit } from '@angular/core';
import { EventsCRUDService } from 'src/app/Controllers/eventHandler/events-crud.service';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-event-summary-form',
  templateUrl: './event-summary-form.component.html',
  styleUrls: ['./event-summary-form.component.scss']
})
export class EventSummaryFormComponent implements OnInit {

  constructor(public eventsCRUD:EventsCRUDService) { }

  ngOnInit(): void {
    this.enablePopUps();
  }
  
  enablePopUps(){
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
  }

}
