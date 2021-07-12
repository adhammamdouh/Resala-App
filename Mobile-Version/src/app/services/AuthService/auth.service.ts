import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestfulAPIHandlerService } from '../RestfulAPIHandler/restful-apihandler.service';
import * as service from 'src/app/data/services.json';
import { Response } from 'src/app/domains/response';
import { Router } from '@angular/router';
import { PrivilegeHandlerService } from '../PrivilegeService/privilege-handler.service';
import Volunteer from 'src/app/domains/Volunteer/Volunteer';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private restfulAPI: RestfulAPIHandlerService,
              private router: Router,
              private privilegeHandler: PrivilegeHandlerService) { }

  login(username, password) {
    this.restfulAPI.post(
      service.baseUrl + service.login, 
      {username: username, password: password},
      {}).subscribe((res) => {this.onLoginSuccess(res)}, (res) => { this.onLoginFail(res) })
  }

  onLoginSuccess(respones: any) {
    const volunteer: Volunteer = respones;
    console.log("inlogin", volunteer);

    this.privilegeHandler.fillRoles(volunteer.privileges);
    this.router.navigate(['home']);
  }

  onLoginFail(respones: any) {
    console.log("insideLoginFail", respones.error);
  }
}
