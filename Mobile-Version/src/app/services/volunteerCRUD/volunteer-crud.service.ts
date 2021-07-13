import { Injectable } from '@angular/core';
import Volunteer from 'src/app/domains/Volunteer/Volunteer';
import { RestfulAPIHandlerService } from '../RestfulAPIHandler/restful-apihandler.service';
import * as service from 'src/app/data/services.json';
import { PrivilegeHandlerService } from '../PrivilegeService/privilege-handler.service';
import { AuthService } from '../AuthService/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { Response } from 'src/app/domains/response';

export enum Status {
  active = 1,
  archive = 2,
  requestToArchive = 3
}

@Injectable({
  providedIn: 'root'
})
export class VolunteerCRUDService {
  volunteers: Volunteer[] = [];

  constructor(private restfulAPI: RestfulAPIHandlerService,
              private privilegeHandler: PrivilegeHandlerService) { }

  async refresh() {
    this.getActiveVolunteers();
  }
  async getActiveVolunteers() {
    const url = service.baseUrl + 'volunteer/getAllByBranch/1'
      //(this.privilegeHandler.isGetByStatusPrivilegeValid() ? 'volunteer/getAllByBranch/1' : '');
    //console.log(url)
      //+ '/' + Status.active;
    const res = await this.restfulAPI.get(url);

    res.subscribe((res: Response) => {
      this.volunteers = res.message;
      console.log(res)
      console.log(this.volunteers);
    })
  }
}
