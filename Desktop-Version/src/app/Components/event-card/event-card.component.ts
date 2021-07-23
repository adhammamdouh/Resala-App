import { Component, Input, OnInit } from '@angular/core';
import { EventsCRUDService } from 'src/app/Controllers/eventHandler/events-crud.service';
import ResalaEvent from 'src/app/Domains/ResalaEvent/ResalaEvent';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() event:ResalaEvent;
  constructor(private eventCRUD:EventsCRUDService) { 
    
  }

  ngOnInit(): void {
  
  }

  getDay(date){
    return new Date(date).getDate();
  }

  getMonth(date){
    let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT' ,'NOV', 'DEC']
    return months[new Date(date).getMonth()];
  }

  getYear(date){
    return new Date(date).getFullYear();
  }

  changeSelectedEvent(){
    this.eventCRUD.changeSelectedEvent(this.event);
  }

  isThisActiveCard(){
    return this.eventCRUD.selectedEvent.id == this.event.id;
  }
}
