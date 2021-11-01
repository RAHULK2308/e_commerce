import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService, public router:Router){}
  canActivate():boolean{
    if(this.auth.AdminloggedIn()){
      return true
    }else{
      this.router.navigate(['/']);
      return false;
    }
  }
}
