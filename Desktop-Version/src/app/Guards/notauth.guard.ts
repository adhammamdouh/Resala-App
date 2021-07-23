import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Controllers/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotauthGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.getToken()){
        this.router.navigate(['']);
        return false;
      } else {
        return true;
      }
  }
  
}
