import { Injectable } from '@angular/core';
import  *  as  APILinks  from  '../SharedData/APILinks.json';
@Injectable({
  providedIn: 'root'
})
export class GetAPILinksService {
  constructor() { }
  getLoginLink():string{
    return APILinks.baseURL+APILinks.login;
  }
}
