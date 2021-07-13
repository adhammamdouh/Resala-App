import { Injectable } from '@angular/core';
import ResalaEvent from 'src/app/domains/ResalaEvent/ResalaEvent';
import { PrivilegeHandlerService } from '../PrivilegeService/privilege-handler.service';
import { RestfulAPIHandlerService } from '../RestfulAPIHandler/restful-apihandler.service';
import * as service from 'src/app/data/services.json';
import { Response } from 'src/app/domains/response';

@Injectable({
  providedIn: 'root'
})
export class EventCRUDService {
  events: ResalaEvent[] = [];

  constructor(private restfulAPI: RestfulAPIHandlerService,
              private privilegeHandler: PrivilegeHandlerService) { }

  async refresh() {
    this.getAllEvents();
  }
  async getAllEvents() {
    const url = service.baseUrl + 'event/getAll'
      //(this.privilegeHandler.isGetByStatusPrivilegeValid() ? 'volunteer/getAllByBranch/1' : '');
    //console.log(url)
      //+ '/' + Status.active;
    const res = await this.restfulAPI.get(url);

    res.subscribe((res: Response) => {
      this.events = res.message;
      console.log(res)
      console.log(this.events);
    })
  }
}
