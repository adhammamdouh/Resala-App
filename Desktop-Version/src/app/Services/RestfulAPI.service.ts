import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { GetAPILinksService } from './get-apilinks.service';
import { AuthService } from '../Controllers/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RestfulAPIService {
  
  constructor(private http: HttpClient, private APILink: GetAPILinksService, private authService:AuthService) { }

  postRequest(url, body){
    let options = {
      headers: {
        "Authorization" : "Bearer " + this.authService.getToken()
      }
    }
    return this.http.post(url, body, options);
  }
  
  getRequest(url){
    let options = {
      headers: {
        "Authorization" : "Bearer " + this.authService.getToken()
      }
    }
    return this.http.get(url, options);
  }

  putRequest(url, body){
    let options = {
      headers: {
        "Authorization" : "Bearer " + this.authService.getToken()
      }
    }
    return this.http.put(url, body, options)
  }

} 
