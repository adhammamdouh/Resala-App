import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestfulAPIHandlerService } from '../RestfulAPIHandler/restful-apihandler.service';
import * as service from 'src/app/data/services.json';
import { Response } from 'src/app/domains/response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = 5;
  constructor(private restfulAPI: RestfulAPIHandlerService,
              private router: Router) { }

  login(username, password) {
    this.restfulAPI.post(
      service.baseUrl + service.login, 
      {username: username, password: password},
      {}).subscribe((res) => {this.onLoginSuccess(res)}, (res) => { this.onLoginFail(res) })
  }

  onLoginSuccess(respones: any) {
    console.log("inlogin", respones);
    console.log(this.user);
    //this.router.navigate(['home']);
  }

  onLoginFail(respones: any) {
    console.log("insideLoginFail", respones.error);
  }
}
