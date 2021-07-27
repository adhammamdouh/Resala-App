import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from 'src/app/Domains/User';
import { GetAPILinksService } from '../../services/get-apilinks.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private getAPILinksService: GetAPILinksService,
    private router: Router) { }

  setToken(token): void {
    localStorage.setItem('token', JSON.stringify(token));
  }


  setUser(user){
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(){
    return JSON.parse(localStorage.getItem('user'));
  }

  getToken(): string {
    return JSON.parse(localStorage.getItem('token'));
  }

  authorize(user: User):Observable<any> {
    let loginLink = this.getAPILinksService.getLoginLink();
    return this.httpClient.post(loginLink, user);
  }

  deleteAuthorization(){
    localStorage.removeItem("token");
  }

  checkTokenValidation(){
    //Check if token is valid
  }
  
  parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  };

}
