import { Component, OnInit } from '@angular/core';
import { EventsCRUDService } from 'src/app/Controllers/eventHandler/events-crud.service';
import { PrivilegeHandlerService } from 'src/app/Controllers/PrivilegeHandler/privilege-handler.service';
import ResalaEvent from 'src/app/Domains/ResalaEvent/ResalaEvent';

@Component({
  selector: 'app-events-grid',
  templateUrl: './events-grid.component.html',
  styleUrls: ['./events-grid.component.scss']
})
export class EventsGridComponent implements OnInit {
  
  statesText = [];
  events:ResalaEvent[];
  constructor(public eventsCRUD:EventsCRUDService, 
              public privilegeHandler:PrivilegeHandlerService) { }
  ngOnInit(): void {
    if (this.privilegeHandler.isGetByEventStatusPrivilegeValid()){
      this.statesText = ["القادمة", "السابقة"];
    }
    if (this.eventsCRUD.gridState == 0){
      this.events = this.eventsCRUD.nextEvents;
    } else {
      this.events = this.eventsCRUD.previousEvents;
    }
  }

  onSwitchingState(state){
    switch (state) {
      case 0:
        this.firstState();
        break;
      case 1:
        this.secondState();
        break;
      default:
        break;
    }
  }

  firstState(){
    //Active Events
    this.eventsCRUD.changeGridState(0)
    if (this.eventsCRUD.nextEvents != undefined){
      this.events = this.eventsCRUD.nextEvents;
      this.eventsCRUD.selectedEvent = this.events[0]
      this.eventsCRUD.initializeEventForm()
      return
    }
    this.events = undefined;
    this.eventsCRUD.selectedEvent = undefined;
  }

  secondState(){
    ///Not Active Events
    this.eventsCRUD.changeGridState(1)
    if (this.eventsCRUD.previousEvents != undefined){
      this.events = this.eventsCRUD.previousEvents;
      this.eventsCRUD.selectedEvent = this.events[0]
      this.eventsCRUD.initializeEventForm()
      return
    }
    this.events = undefined;
    this.eventsCRUD.selectedEvent = undefined;
  }

  activateAddMode(){
    this.eventsCRUD.activateAddMode();
  }
}
