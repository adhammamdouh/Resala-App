import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestfulAPIHandlerService } from '../RestfulAPIHandler/restful-apihandler.service';
import * as service from 'src/app/data/services.json';
import { Response } from 'src/app/domains/response';
import { Router } from '@angular/router';
import { PrivilegeHandlerService } from '../PrivilegeService/privilege-handler.service';
import Volunteer from 'src/app/domains/Volunteer/Volunteer';
import { VolunteerCRUDService } from '../VolunteerCRUD/volunteer-crud.service';
import { LoadingHandlerService } from '../LoadingHandler/loading-handler.service';
import * as keys from 'src/app/data/keys.json';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  token: string = ''
  user: Volunteer;

  constructor(private restfulAPI: RestfulAPIHandlerService,
              private router: Router,
              private privilegeHandler: PrivilegeHandlerService,
              private volunteerCRUD: VolunteerCRUDService,
              private loadingHandler: LoadingHandlerService,
              private storage: Storage) { }

  async login(username, password) {
    await this.loadingHandler.presentLoading();
    const res = await this.restfulAPI.post(
      service.baseUrl + service.login, 
      {username: username, password: password}, false);

    res.subscribe((res) => {this.onLoginSuccess(res)}, (res) => { this.onLoginFail(res) });
  }

  async onLoginSuccess(respones: any) {
    this.user = respones.message.volunteer;
    this.token = respones.message.token;
    
    await this.storage.set(keys.TOKEN, this.token);
    await this.storage.set(keys.USER, this.user);

    this.privilegeHandler.fillRoles(this.user.privileges);

    await this.router.navigate(['home']);
    await this.loadingHandler.dismissLoading();
  }

  async onLoginFail(respones: any) {
    console.log("insideLoginFail", respones.error);

    await this.loadingHandler.dismissLoading();
  }

  async logout() {
    await this.storage.clear();
  }
}
