import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from 'src/app/Domains/User';
import { AlertHandlerService } from '../alertHandler/alert-handler.service';
import { GetAPILinksService } from '../../services/get-apilinks.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private AlertService: AlertHandlerService,
    private getAPILinksService: GetAPILinksService) { }

  setToken(token): void {
    localStorage.setItem('token', token);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  authorize(user: User):Observable<any> {
    let loginLink = this.getAPILinksService.getLoginLink();
    return this.httpClient.post(loginLink, user);
  }

}
