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
import LeadVolunteer from 'src/app/domains/Volunteer/LeadVolunteer';
import User from 'src/app/domains/User';
import { ToastHandlerService, ToastMode } from '../ToastHandler/toast-handler.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, from, observable, Observable, of } from 'rxjs';
import { Platform } from '@ionic/angular';
import { take, map, switchMap } from 'rxjs/operators';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public user: Observable<any>;
  private userData =  new BehaviorSubject(null);
  public token = '';

  constructor(private router: Router,
              private privilegeHandler: PrivilegeHandlerService,
              private loadingHandler: LoadingHandlerService,
              private storage: Storage,
              private toast: ToastHandlerService,
              private plt: Platform,
              private http: HttpClient) {
                this.loadStoredToken();
               }
  
  loadStoredToken() {
    let platfromObs = from(this.plt.ready());
    this.user = platfromObs.pipe(
      switchMap(() => {
        return from(this.storage.get(keys.TOKEN));
      }),
      map(token => {
        if(token) {
          let decoded = helper.decodeToken(token);
          this.userData.next(decoded);
          this.token = token;
          this.privilegeHandler.fillRoles(this.getPrivilegesArray(this.getUser().aud));
          return true;
        } else { 
          return null;
        }
      })
    );
  }
  
  login(credentials: {username: string; password: string }){
    return this.http.post(service.baseUrl + service.login, {userName: credentials.username, password: credentials.password}).pipe(
      take(1),
      map((res: Response) => {
        return res.message.token;
      }),
      switchMap(token => {
        let decoded = helper.decodeToken(token);
        this.userData.next(decoded)
        this.token = token;
        this.privilegeHandler.fillRoles(this.getPrivilegesArray(this.getUser().aud));
        let storageObs = from(this.storage.set(keys.TOKEN, token)); 
        return storageObs;
      })
    );
  }

  getUser() {
    return this.userData.getValue();
  }

  /*async onLoginSuccess(respones: any) {
    this.user = respones.message;
    this.token = respones.message.token;
    console.log(this.user);

    await this.storage.set(keys.TOKEN, this.token).then(async() => {
      await this.storage.set(keys.USER, this.user).then(async() => {
        await this.storage.set(keys.LOGIN_STATUS, true);
      })
    });
    
    this.privilegeHandler.fillRoles(this.user.user.privileges);

    await this.router.navigate(['home']);
    await this.loadingHandler.dismissLoading();
  }

  async onLoginFail(respones: any) {
    console.log("insideLoginFail", respones.error);
    this.toast.presentToast(respones.error.error, ToastMode.fail);
    await this.loadingHandler.dismissLoading();
  }*/

  getPrivilegesArray(privileges: string) {
    
    privileges = privileges.replace(/\[/g, '');
    privileges = privileges.replace(/\]/g, '');
    privileges = privileges.replace(/ +/g, '');
    const privilegesArr = privileges.split(',');
    
    return privilegesArr;
  }

  logout() {
    this.privilegeHandler.resetRoles();
    this.storage.clear().then(() => {
      this.router.navigateByUrl('/login');
      this.privilegeHandler.resetRoles();
      this.userData.next(null);
    });
    return of(null);
  }
}
