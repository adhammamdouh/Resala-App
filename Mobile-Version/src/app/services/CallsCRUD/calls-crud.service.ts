import { Injectable } from '@angular/core';
import { RestfulAPIHandlerService } from '../RestfulAPIHandler/restful-apihandler.service';
import * as service from 'src/app/data/services.json';
import Calls from 'src/app/domains/Call/Calls';
import { Response } from 'src/app/domains/response';
import { CallTypes } from 'src/app/components/call-card/call-type.enum';
import CallType from 'src/app/domains/Call/CallType';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CallsCRUDService {
  calls: Calls[] = [];

  constructor(private restfulAPI: RestfulAPIHandlerService) { }

  refresh(eventId: number, volunteerId: number) {
    return this.getCalls(eventId, volunteerId);
  }

  getCalls(eventId: number, volunteerId: number) {
    this.calls = [];
    const url = service.baseUrl + 'calls/getAssignedCalls';
    const res = this.restfulAPI.post(url, {
                                            event:{
                                              id: eventId
                                          },
                                            volunteer:
                                          {
                                              id: volunteerId
                                          }
    }).pipe(
      take(1),
      map((msg: Response) => {
        for(let i = 0; i < msg.message.length ; ++i) {
          const call = this.handleCall(msg.message[i]);
          this.calls.push(call);
        }
        return this.calls;
      })
    );

    return res;
  }

  handleCall(call: Calls) {
    if((call.callType.id === CallTypes.invitation && call.invitationCallResult != null && call.invitationComment != null) ||
      (call.callType.id === CallTypes.feedback && call.feedBackCallResult != null && call.feedBackComment != null) ||
      (call.callType.id === CallTypes.acceptNotAttend && call.notAttendCallResult != null && call.notAttendComment != null)) {
      call.completed = true;
    } else {
      call.completed = false;
    }

    return call;
  }

  async assignNetwork(eventId: number, networkAssignedToVolunteers: {networkType: {id: number}, volunteer: {id: number}}[]) {
    const url = service.baseUrl + 'networkType/assignNetworkAssignedToVolunteer';
    const res = await this.restfulAPI.post(url, {
      event:
          {
              id: eventId
          },
      networkAssignedToVolunteers: networkAssignedToVolunteers});

    return res;
  }

  async getNetworksAssignedToVolunteers(eventId: number) {
    const url = service.baseUrl + 'networkType/getNetworkAssignedToVolunteer/' + eventId;
    const res = await this.restfulAPI.get(url);

    return res;
  }

  async confirmAssignedNetworks(distributionMode: number, eventId: number) {
    const url = service.baseUrl + 'calls/confirmAssignedCalls/' + distributionMode;
    const res = await this.restfulAPI.post(url, {
                                                  event:
                                                  {
                                                      id: eventId
                                                  }});

    return res;
  }

  async submitCall(callId: number, callType: CallType, callResult: number, comment: string) {
    const url = service.baseUrl + 'calls/submitAssignedCalls';
    const res = await this.restfulAPI.post(url, {
                                                  callId:callId,
                                                  callType: callType,
                                                  comment: comment,
                                                  callResult:{
                                                      id:callResult
                                                  }
                                              });

    return res;
  }
}
