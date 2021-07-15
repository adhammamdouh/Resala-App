import { Injectable } from '@angular/core';
import ResalaEvent from 'src/app/domains/ResalaEvent/ResalaEvent';
import { PrivilegeHandlerService } from '../PrivilegeService/privilege-handler.service';
import { RestfulAPIHandlerService } from '../RestfulAPIHandler/restful-apihandler.service';
import * as service from 'src/app/data/services.json';
import { Response } from 'src/app/domains/response';
import { Observable } from 'rxjs';

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

  constructor(private restfulAPI: RestfulAPIHandlerService,
              private privilegeHandler: PrivilegeHandlerService) { }

  async refresh(event = null) {
    this.getActiveEvents(event);
  }

  async getActiveEvents(event = null) {
    if(!this.privilegeHandler.isGetByEventStatusPrivilegeValid()) return;
    const url = service.baseUrl + 'event/getAllByState/' + EventStatus.active;

    const res = await this.restfulAPI.get(url);

    res.subscribe((res: Response) => {
      this.activeEvents = res.message;
      console.log(this.activeEvents);
    })
  }

  async getCompleteEvents(event = null) {
    if(!this.privilegeHandler.isGetByEventStatusPrivilegeValid()) return;
    const url = service.baseUrl + 'event/getAllByState/' + EventStatus.completed;

    const res = await this.restfulAPI.get(url);

    res.subscribe((res: Response) => {
      this.completedEvents = res.message;
      console.log(this.completedEvents);
    })
  }

  /*archiveEvent(event: ResalaEvent) {
    
  }*/
}
