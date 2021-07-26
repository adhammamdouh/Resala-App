import { Injectable } from '@angular/core';
import ResalaEvent from 'src/app/domains/ResalaEvent/ResalaEvent';
import Branch from 'src/app/domains/Branch';

import { PrivilegeHandlerService } from '../PrivilegeService/privilege-handler.service';
import { RestfulAPIHandlerService } from '../RestfulAPIHandler/restful-apihandler.service';
import * as service from 'src/app/data/services.json';
import { Response } from 'src/app/domains/response';
import { forkJoin, Observable, of } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { branches } from 'src/app/data/general-data.enum';
import { map, take } from 'rxjs/operators';

export enum EventStatus {
  active = 1,
  archive = 2,
  completed = 3,
}

@Injectable({
  providedIn: 'root'
})
export class EventCRUDService {
  activeEvents: ResalaEvent[] = [];
  completedEvents: ResalaEvent[] = [];
  eventList = [[], [], [], []];

  constructor(private restfulAPI: RestfulAPIHandlerService,
              private privilegeHandler: PrivilegeHandlerService) { }

  refresh() {
    const ref = forkJoin({
      active: this.getActiveEvents(),
      completed: this.getCompleteEvents(),
    });
    return ref;
  }

  getActiveEvents(event = null) {
    if(!this.privilegeHandler.isGetByEventStatusPrivilegeValid()) return of(null);
    const url = service.baseUrl + 'event/getAllByState/' + EventStatus.active;

    return this.restfulAPI.get(url).pipe(
      take(1),
      map((msg: Response) => {
        this.activeEvents = msg.message;
        return msg;
      })
    );
  }

  getCompleteEvents(event = null) {
    if(!this.privilegeHandler.isGetByEventStatusPrivilegeValid()) return of(null);
    const url = service.baseUrl + 'event/getAllByState/' + EventStatus.completed;

    return this.restfulAPI.get(url).pipe(
      take(1),
      map((msg: Response) => {
        this.completedEvents = msg.message;
        return msg;
      })
    );
  }

  search(value) {
    this.completeSearching();

    for(let i = 0 ; i < this.activeEvents.length ; ++i) {
      const currentEvent = this.activeEvents[i];
      if(currentEvent.name.includes(value)) 
        this.eventList[EventStatus.active].push(currentEvent);
      else if(currentEvent.description.includes(value))
        this.eventList[EventStatus.active].push(currentEvent);
    }

    for(let i = 0 ; i < this.completedEvents.length ; ++i) {
      const currentEvent = this.completedEvents[i];
      if(currentEvent.name.includes(value)) 
        this.eventList[EventStatus.completed].push(currentEvent);
      else if(currentEvent.description.includes(value))
        this.eventList[EventStatus.completed].push(currentEvent);
    }
    return this.eventList;
  }

  completeSearching() {
    this.eventList = [[], [], [], []];
  }

  async creatEvent(form: FormGroup) {

  }

  async makeAttendance(volunteerId: number, branchId: number, eventId: number) {
    const url = service.baseUrl + 'eventAttendance/confirmMakeAttendance';

    const res = await this.restfulAPI.put(url, { 
                                                volunteer:{
                                                    id: volunteerId
                                                },
                                                branch:{
                                                    id: branchId
                                                },
                                                event:{
                                                    id: eventId
                                                }});

    return res;
  }
}
