import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from 'src/app/Domains/User';
import  *  as  APILinks  from  "../../SharedData/APILinks.json";
import { AlertHandlerService } from '../alertHandler/alert-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient,
              private AlertService: AlertHandlerService) { }

  setToken(token):void{
    localStorage.setItem('token',token);
  }

  getToken():string{
    return localStorage.getItem('token');
  }

  authorize(user:User){
    this.httpClient.post(APILinks.baseURL + APILinks.login, user)
    .subscribe((data)=>{
      console.log(data);
    }, (err)=>{
      this.AlertService.handleError(err.error);
    });
  }

}
