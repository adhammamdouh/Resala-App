import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestMethodService {
  rootUrl:string  = "https://resala-engine.ey.r.appspot.com/";
  constructor(private http: HttpClient) { }

  postRequest(url,object, headers){
    return this.http.post(this.rootUrl + url, object, headers)
  }
  getRequest(url, headers){
    return this.http.get(this.rootUrl + url, headers);
  }
}
