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

  async get(url) {
    

    return this.http.get(url, await this.getHttpHeaders());
  }

  async post(url, body) {
    return this.http.post(url, body, await this.getHttpHeaders());
  }

  async getHttpHeaders() {
    const token = await this.storage.get(keys.TOKEN);
    return {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      )
    }
  }
}
