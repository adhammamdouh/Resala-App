import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestfulAPIHandlerService {

  constructor(private http: HttpClient) { }

  get(url, options) {
    return this.http.get(url, options);
  }

  post(url, body, options) {
    return this.http.post(url, body, options);
  }
}
