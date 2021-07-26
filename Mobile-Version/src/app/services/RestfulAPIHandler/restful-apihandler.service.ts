import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';
import * as keys from 'src/app/data/keys.json';
import { AuthService } from '../AuthService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RestfulAPIHandlerService {

  constructor(private http: HttpClient,
              private storage: Storage,
              private auth: AuthService) { }

  get(url, token = true) {
    return this.http.get(url, this.getHttpHeaders(token));
  }

  post(url, body, token = true) {
    return this.http.post(url, body, this.getHttpHeaders(token));
  }

  put(url, body, token = true) {
    return this.http.put(url, body, this.getHttpHeaders(token));
  }

  getHttpHeaders(tokenRequired: boolean) {
    const token = this.auth.token;
    let headers 
    if(tokenRequired) {
      headers = new HttpHeaders(
        {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        })
    }
    else 
      headers = new HttpHeaders(
                    {
                      'Content-Type': 'application/json',
                    })
    return {
      headers: headers
    }
  }
}
