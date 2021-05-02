import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from 'src/app/Domains/User';
import  *  as  APILinks  from  "../../SharedData/APILinks.json";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  setToken(token):void{
    localStorage.setItem('token',token);
  }

  getToken():string{
    return localStorage.getItem('token');
  }

  authorize(user:User){
    this.httpClient.post(APILinks.baseURL+APILinks.login, user);
  }

}
