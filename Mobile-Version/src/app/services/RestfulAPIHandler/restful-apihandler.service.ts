import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Observable } from 'rxjs';
import * as keys from 'src/app/data/keys.json';

@Injectable({
  providedIn: 'root'
})
export class RestfulAPIHandlerService {

  constructor(private http: HttpClient,
              private storage: Storage) { }

  async get(url, token = true) {
    return this.http.get(url, await this.getHttpHeaders(token));
  }

  async post(url, body, token = true) {
    return this.http.post(url, body, await this.getHttpHeaders(token));
  }

  async put(url, body, token = true) {
    return this.http.put(url, body, await this.getHttpHeaders(token));
  }

  async getHttpHeaders(tokenRequired: boolean) {
    const token = await this.storage.get(keys.TOKEN);
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
