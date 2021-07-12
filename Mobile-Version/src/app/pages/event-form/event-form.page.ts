import { Component, OnInit } from '@angular/core';
import { EventForm } from './event-form';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.page.html',
  styleUrls: ['./event-form.page.scss'],
})
export class EventFormPage implements OnInit {
  eventFormAtt: EventForm = new EventForm();
  isAddForm: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  addEvent() {

  }
  
  editEvent() {

  }
}
