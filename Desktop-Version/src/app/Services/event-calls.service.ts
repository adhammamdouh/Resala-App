import { Injectable } from '@angular/core';
import { EventsCRUDService } from '../Controllers/eventHandler/events-crud.service';
import { GetAPILinksService } from './get-apilinks.service';
import { RestfulAPIService } from './RestfulAPI.service';

@Injectable({
  providedIn: 'root'
})
export class EventCallsService {

  constructor(private restfulAPI:RestfulAPIService, private getAPILINKS:GetAPILinksService, private eventsCRUD:EventsCRUDService) { }

  getCallsForEvent(id){
    this.restfulAPI.postRequest(this.getAPILINKS.getEventCalls(), {
      "event":{
          "id": id
      },
      "volunteer":
      {
          "id": JSON.parse(localStorage.getItem('user'))['volunteer_id']
      }
  }).subscribe((res:any)=>{
      this.eventsCRUD.selectedEventCalls = res.message;
    })
  }
}
